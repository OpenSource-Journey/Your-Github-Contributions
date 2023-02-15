import { Box, Text, Tooltip } from '@chakra-ui/react';
import { UserContribution } from 'github-user-contribution-summary';
import { first, last, uniqueId } from 'lodash';
import React, { FC, useMemo } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ContributionCalendar.css';

interface Props {
  userContribution: UserContribution;
}
type SquareValue = {
  date: string;
  count: number;
};

const ContributionCalendar: FC<Props> = ({ userContribution }) => {
  const { contributionDays, totalContributions } = userContribution;

  const dates = useMemo(() => {
    return {
      startDate: first(contributionDays)?.date,
      endDate: last(contributionDays)?.date,
    };
  }, [contributionDays]);

  const getCssClassForSquare = (value: SquareValue) => {
    const count = value?.count;
    if (count) {
      if (count <= 10) {
        return 'color-github-1';
      } else if (count <= 20 && count > 10) {
        return 'color-github-2';
      } else if (count <= 40 && count > 20) {
        return 'color-github-3';
      } else {
        return 'color-github-4';
      }
    } else {
      return 'color-empty';
    }
  };

  return (
    <Box
      as="div"
      border="1px"
      borderColor="gray.200"
      borderRadius="4px"
      mt={8}
      p={4}
      shadow="md"
    >
      <Text
        fontWeight="medium"
        my={4}
      >{`${totalContributions} Contributions in the last year`}</Text>
      <CalendarHeatmap
        showMonthLabels
        showWeekdayLabels
        classForValue={getCssClassForSquare}
        endDate={dates.endDate}
        startDate={dates.startDate}
        tooltipDataAttrs={(value: { date: string; count: number }) => {
          return {
            'data-tip': `${value.count} Contributions on ${value.date}`,
          };
        }}
        transformDayElement={(rect, value: SquareValue) => (
          <Tooltip
            hasArrow
            key={uniqueId()}
            label={`${value?.count} Contributions on ${value?.date}`}
          >
            {rect}
          </Tooltip>
        )}
        values={contributionDays.map((contribution) => ({
          ...contribution,
          count: contribution.contributionCount,
        }))}
      />
    </Box>
  );
};

export default ContributionCalendar;
