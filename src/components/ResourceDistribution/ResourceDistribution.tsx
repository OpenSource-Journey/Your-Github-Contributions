import { Box, Grid, Text } from '@chakra-ui/react';
import {
  IssueCountByState,
  PullRequestCountByState,
} from 'github-user-contribution-summary';
import React, { FC } from 'react';
import ResourcePieChart from './ResourcePieChart/ResourcePieChart';

interface Props {
  pullRequestCounts: PullRequestCountByState | undefined;
  issueCounts: IssueCountByState | undefined;
}

const ResourceDistribution: FC<Props> = ({
  pullRequestCounts,
  issueCounts,
}) => {
  return (
    <Grid
      gap={8}
      mt={8}
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        p={4}
        shadow="md"
      >
        <Text fontWeight="medium" mb={4}>
          Pull Request Distribution
        </Text>
        {pullRequestCounts ? (
          <ResourcePieChart data={pullRequestCounts} />
        ) : null}
      </Box>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        p={4}
        shadow="md"
      >
        <Text fontWeight="medium" mb={4}>
          Issue Distribution
        </Text>
        {issueCounts ? <ResourcePieChart data={issueCounts} /> : null}
      </Box>
    </Grid>
  );
};

export default ResourceDistribution;
