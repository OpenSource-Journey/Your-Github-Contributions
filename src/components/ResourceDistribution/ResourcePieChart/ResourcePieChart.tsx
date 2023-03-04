import {
  IssueCountByState,
  PullRequestCountByState,
} from 'github-user-contribution-summary';
import { startCase } from 'lodash';
import React, { FC, useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './ResourcePieChart.css';

const COLORS_MAP = { Open: '#38B2AC', Closed: '#F56565', Merged: '#9F7AEA' };

interface Props {
  data: PullRequestCountByState | IssueCountByState;
}

const ResourcePieChart: FC<Props> = ({ data }) => {
  const graphData = useMemo(() => {
    return Object.entries(data).map((entry) => ({
      name: startCase(entry[0]),
      value: entry[1],
    }));
  }, [data]);

  return (
    <ResponsiveContainer
      className="custom-responsive-container"
      height={400}
      width={300}>
      <PieChart>
        <Pie
          data={graphData}
          dataKey="value"
          innerRadius={100}
          outerRadius={140}
          paddingAngle={5}>
          {graphData.map((entry, index) => (
            <Cell
              fill={COLORS_MAP[entry.name as keyof typeof COLORS_MAP]}
              key={`cell-${index}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconType="square" verticalAlign="top" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ResourcePieChart;
