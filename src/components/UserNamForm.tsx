import { Button, Flex, Grid, Input, Spinner } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ContributionSummary,
  getContributionSummary,
} from 'github-user-contribution-summary';
import ContributionCalendar from './ContributionCalendar/ContributionCalendar';
import GithubResourceSummaryWidget from './GithubResourceSummaryWidget';

const UserNameForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Sachin-chaurasiya');
  const [contributionData, setContributionData] =
    useState<ContributionSummary>();

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
    getUserContributionSummary();
  }, [getUserContributionSummary]);

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
          Capture
        </Button>
      </Flex>

      {isLoading ? (
        <Spinner display="block" margin="auto" size="xl" />
      ) : (
        contributionData && (
          <>
            <Grid
              gap={8}
              mt={8}
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
            >
              {Object.entries(contributionSummary).map((value) => (
                <GithubResourceSummaryWidget
                  key={value[0]}
                  title={value[0]}
                  value={value[1]}
                />
              ))}
            </Grid>
            <ContributionCalendar
              userContribution={{
                contributionDays: contributionData.contributionByDate,
                totalContributions: contributionData.totalContributionCount,
              }}
            />
          </>
        )
      )}
    </>
  );
};

export default UserNameForm;
