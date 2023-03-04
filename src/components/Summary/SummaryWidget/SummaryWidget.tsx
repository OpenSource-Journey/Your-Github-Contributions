import { Box, Text } from '@chakra-ui/react';
import { startCase } from 'lodash';
import React, { FC } from 'react';

interface Props {
  title: string;
  value: number;
}

const SummaryWidget: FC<Props> = ({ title, value }) => {
  return (
    <Box
      as="div"
      border="1px"
      borderColor="gray.200"
      borderRadius="4px"
      p={4}
      shadow="md">
      <Text color="gray.500" fontSize={['md', 'lg']} textAlign="center">
        {startCase(title.replace('total', ''))}
      </Text>
      <Text fontSize={['md', 'lg']} fontWeight="medium" textAlign="center">
        {value}
      </Text>
    </Box>
  );
};

export default SummaryWidget;
