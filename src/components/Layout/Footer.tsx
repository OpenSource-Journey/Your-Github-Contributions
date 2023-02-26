import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Box
        p={4}
        mx={{ base: 0, lg: 20 }}
        borderTop="1px solid"
        borderColor="gray.200"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box textAlign="center">
            <Text fontWeight="light">
              Made with ❤️ by{' '}
              <Link href="https://sachinchaurasiya.dev">Sachin Chaurasiya</Link>{' '}
              and{' '}
              <Link href="https://github.com/OpenSource-Journey/Your-Github-Contributions#-contributors">
                Folks
              </Link>{' '}
              ✨
            </Text>
          </Box>
          <Box>
            <Link href="https://github.com/Sachin-chaurasiya" target="_blank">
              <IconButton
                aria-label="Github"
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                icon={<FaGithub />}
              />
            </Link>
            <Link href="https://twitter.com/sachindotcom" target="_blank">
              <IconButton
                aria-label="Twitter"
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                icon={<FaTwitter />}
              />
            </Link>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
