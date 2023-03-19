import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Link,
  Text,
  Tooltip,
  useClipboard,
} from '@chakra-ui/react';
import ContributionCalendar from 'components/ContributionCalendar/ContributionCalendar';
import GithubOrgs from 'components/GithubOrgs';
import GithubPopularRepositories from 'components/GithubPopularRepositories';
import PageHead from 'components/PageHead';
import ResourceDistribution from 'components/ResourceDistribution/ResourceDistribution';
import Summary from 'components/Summary/Summary';
import {
  ContributionSummary,
  getContributionSummary,
  getIssueCountByState,
  getPullRequestCountByState,
  IssueCountByState,
  IssueState,
  PullRequestCountByState,
  PullRequestState,
} from 'github-user-contribution-summary';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { showToastMessage } from 'utils/toastUtils';
import UserPageSkeleton from './UserPageSkeleton';

const UserPage = () => {
  const { userName = '' } = useParams<{ userName: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contributionData, setContributionData] =
    useState<ContributionSummary>();
  const [pullRequestCounts, setPullRequestCounts] =
    useState<PullRequestCountByState>();
  const [issueCounts, setIssueCounts] = useState<IssueCountByState>();
  const { onCopy, setValue, hasCopied } = useClipboard('');

  const getUserContributionSummary = useCallback(async () => {
    setIsLoading(true);
    setContributionData(undefined);
    const argument = {
      userName,
      githubToken: process.env.REACT_APP_GITHUB_TOKEN || '',
    };

    try {
      const response = await getContributionSummary(argument);
      setContributionData(response);
    } catch (error) {
      console.log('Something went wrong', error);
    } finally {
      setIsLoading(false);
    }
  }, [userName]);

  const fetchPullRequestCounts = useCallback(async () => {
    setPullRequestCounts(undefined);
    try {
      const argument = {
        userName,
        githubToken: process.env.REACT_APP_GITHUB_TOKEN || '',
      };
      let pullRequestCountByState: PullRequestCountByState = {
        open: 0,
        closed: 0,
        merged: 0,
      };
      const promises = Object.values(PullRequestState).map((state) =>
        getPullRequestCountByState(argument, state)
      );
      const responses = await Promise.allSettled(promises);
      const openState = responses[0];
      const closedState = responses[1];
      const mergedState = responses[2];

      if (openState.status === 'fulfilled') {
        pullRequestCountByState = {
          ...pullRequestCountByState,
          open: openState.value.count,
        };
      }
      if (closedState.status === 'fulfilled') {
        pullRequestCountByState = {
          ...pullRequestCountByState,
          closed: closedState.value.count,
        };
      }
      if (mergedState.status === 'fulfilled') {
        pullRequestCountByState = {
          ...pullRequestCountByState,
          merged: mergedState.value.count,
        };
      }

      setPullRequestCounts(pullRequestCountByState);
    } catch (error) {
      setPullRequestCounts(undefined);
    }
  }, [userName]);

  const fetchIssueCounts = useCallback(async () => {
    setIssueCounts(undefined);
    try {
      const argument = {
        userName,
        githubToken: process.env.REACT_APP_GITHUB_TOKEN || '',
      };
      let issueCountByState: IssueCountByState = {
        open: 0,
        closed: 0,
      };
      const promises = Object.values(IssueState).map((state) =>
        getIssueCountByState(argument, state)
      );
      const responses = await Promise.allSettled(promises);
      const openState = responses[0];
      const closedState = responses[1];

      if (openState.status === 'fulfilled') {
        issueCountByState = {
          ...issueCountByState,
          open: openState.value.count,
        };
      }
      if (closedState.status === 'fulfilled') {
        issueCountByState = {
          ...issueCountByState,
          closed: closedState.value.count,
        };
      }

      setIssueCounts(issueCountByState);
    } catch (error) {
      setIssueCounts(undefined);
    }
  }, [userName]);

  const fetchContributionSummary = useCallback(() => {
    getUserContributionSummary();
    fetchPullRequestCounts();
    fetchIssueCounts();
  }, [getUserContributionSummary, fetchIssueCounts, fetchPullRequestCounts]);

  const contributionSummary = useMemo(() => {
    return {
      totalPullRequests: contributionData?.totalPullRequests ?? 0,
      totalIssues: contributionData?.totalIssues ?? 0,
      totalStarredRepositories: contributionData?.totalStarredRepositories ?? 0,
      totalRepositoriesContributedTo:
        contributionData?.totalRepositoriesContributedTo ?? 0,
      totalRepositories: contributionData?.totalRepositories ?? 0,
      totalGists: contributionData?.totalGists ?? 0,
      totalFollowers: contributionData?.totalFollowers ?? 0,
      totalPullRequestReviewed: contributionData?.totalPullRequestReviewed ?? 0,
    };
  }, [contributionData]);

  useMemo(() => {
    const url = `${window.location.protocol}//${window.location.host}/${userName}`;

    setValue(url);

    return url;
  }, [userName, setValue]);

  useEffect(() => {
    fetchContributionSummary();
  }, [fetchContributionSummary, userName]);

  useEffect(() => {
    if (hasCopied) {
      showToastMessage('success', 'Link copied successfully!');
    }
  }, [hasCopied]);

  return (
    <>
      <PageHead
        description={`Checkout ${userName} contributions summary`}
        title={`${userName} contribution summary`}
      />
      {isLoading ? (
        <UserPageSkeleton />
      ) : (
        <>
          <Flex justifyContent="space-between" width="100%" wrap="wrap">
            <Text
              fontSize={{
                base: '2xl',
                lg: '4xl',
              }}
              fontWeight="semibold"
              mb={7}
              textAlign="center"
            >{`${userName} contributions ✨`}</Text>
            <Flex
              gap={2}
              justifyContent="center"
              width={{ base: '100%', lg: 'initial' }}
            >
              <Link
                href={`https://twitter.com/intent/tweet?text=${`Checkout my @github contributions summary 😍 on "Your GitHub Contributions" ✨ 👇 %0A%20%0A${window.location.href} %0A%20%0AGenerate your contributions summary by just entering your GitHub username on https://ygc.sachinchaurasiya.dev`}`}
                target="_blank"
              >
                <Tooltip label="Share it on Twitter">
                  <IconButton
                    aria-label="Twitter"
                    color="current"
                    fontSize="lg"
                    icon={<FaTwitter />}
                    size="md"
                    variant="ghost"
                  />
                </Tooltip>
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                target="_blank"
              >
                <Tooltip label="Share it on LinkedIn">
                  <IconButton
                    aria-label="Github"
                    color="current"
                    fontSize="lg"
                    icon={<FaLinkedin />}
                    size="md"
                    variant="ghost"
                  />
                </Tooltip>
              </Link>
              <Tooltip label="Copy Url">
                <IconButton
                  aria-label="Copy Url"
                  color="current"
                  fontSize="lg"
                  icon={<HiOutlineClipboardCopy />}
                  size="md"
                  variant="ghost"
                  onClick={() => userName && onCopy()}
                />
              </Tooltip>
            </Flex>
          </Flex>
          <Summary contributionSummary={contributionSummary} />
          <ResourceDistribution
            issueCounts={issueCounts}
            pullRequestCounts={pullRequestCounts}
          />
          <ContributionCalendar
            userContribution={{
              contributionDays: contributionData?.contributionByDate ?? [],
              totalContributions: contributionData?.totalContributionCount ?? 0,
            }}
          />
          <Box id="Contributed-Organizations" my={8}>
            <Grid gap={8}>
              <GridItem
                border="1px"
                borderColor="gray.200"
                borderRadius="4px"
                p={4}
                shadow="md"
              >
                <GithubOrgs
                  organizations={
                    contributionData?.contributedOrganizations ?? []
                  }
                />
              </GridItem>
              <GridItem
                border="1px"
                borderColor="gray.200"
                borderRadius="4px"
                p={4}
                shadow="md"
              >
                <GithubPopularRepositories
                  repositories={contributionData?.popularRepositories ?? []}
                />
              </GridItem>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default UserPage;
