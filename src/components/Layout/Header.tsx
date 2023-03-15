import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import BrandImage from '../../assets/images/octocat.png';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';

const Header = () => {
  return (
    <nav>
      <Box
        borderBottom="1px solid"
        borderColor="gray.200"
        mx={{ base: 0, lg: 20 }}
        p={4}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link _hover={{ textDecoration: 'none' }} href="/">
            <Box textAlign="center">
              <Text fontWeight="bold">
                <Flex justifyContent="center">
                  Y<Image src={BrandImage} />C
                </Flex>
              </Text>
              <Text fontWeight="light">
                <Flex gap={1}>Your Github Contributions</Flex>
              </Text>
            </Box>
          </Link>
          <Flex alignItems="center" gap={4}>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
};

export default Header;
