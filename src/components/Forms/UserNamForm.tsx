import { Button, Flex, Input, Spinner } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ContributionSummary,
  getContributionSummary,
  getPullRequestCountByState,
  getIssueCountByState,
  PullRequestCountByState,
  PullRequestState,
  IssueCountByState,
  IssueState,
} from 'github-user-contribution-summary';
import ContributionCalendar from '../ContributionCalendar/ContributionCalendar';
import ResourceDistribution from '../ResourceDistribution/ResourceDistribution';
import Summary from '../Summary/Summary';

const UserNameForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Sachin-chaurasiya');
  const [contributionData, setContributionData] =
    useState<ContributionSummary>();
  const [pullRequestCounts, setPullRequestCounts] =
    useState<PullRequestCountByState>();
  const [issueCounts, setIssueCounts] = useState<IssueCountByState>();

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

  useEffect(() => {
    fetchContributionSummary();
  }, [fetchContributionSummary]);

  return (
    <>
      <Flex gap={4} justifyContent="center" alignItems="center">
        <Input
          type="search"
          autoFocus
          placeholder="Enter your GitHub Username..."
          value={userName}
          onChange={(e) => {
            const { value } = e.target;
            setUserName(value);
          }}
        />
        <Button
          px={8}
          colorScheme="teal"
          disabled={!userName}
          variant="solid"
          onClick={getUserContributionSummary}
        >
          Generate
        </Button>
      </Flex>

      {isLoading ? (
        <Spinner display="block" margin="auto" size="xl" />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default UserNameForm;
