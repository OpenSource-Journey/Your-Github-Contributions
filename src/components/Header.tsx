import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <nav>
      <Box
        p={4}
        mx={{ base: 0, lg: 20 }}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box textAlign="center">
            <Text fontWeight="bold">YGC</Text>
            <Text fontWeight="light">Your Github Contributions</Text>
          </Box>
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Box>
    </nav>
  );
};

export default Header;
