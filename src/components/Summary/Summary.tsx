import { Grid } from '@chakra-ui/react';
import { FC } from 'react';
import SummaryWidget from './SummaryWidget/SummaryWidget';

interface Props {
  contributionSummary: {
    totalPullRequests: number;
    totalIssues: number;
    totalStarredRepositories: number;
    totalRepositoriesContributedTo: number;
    totalRepositories: number;
    totalGists: number;
    totalFollowers: number;
    totalPullRequestReviewed: number;
  };
}

const Summary: FC<Props> = ({ contributionSummary }) => {
  return (
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
        <SummaryWidget key={value[0]} title={value[0]} value={value[1]} />
      ))}
    </Grid>
  );
};

export default Summary;
