import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Box
        borderColor="gray.200"
        borderTop="1px solid"
        mx={{ base: 0, lg: 20 }}
        p={4}
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
                color="current"
                fontSize="lg"
                icon={<FaGithub />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href="https://twitter.com/sachindotcom" target="_blank">
              <IconButton
                aria-label="Twitter"
                color="current"
                fontSize="lg"
                icon={<FaTwitter />}
                size="md"
                variant="ghost"
              />
            </Link>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
