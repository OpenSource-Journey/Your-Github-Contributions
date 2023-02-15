import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';

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
            <Text fontWeight="bold">
              <Flex justifyContent="center">
                Y<FaGithub />C
              </Flex>
            </Text>
            <Text fontWeight="light">
              <Flex gap={1}>Your Github Contributions</Flex>
            </Text>
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
