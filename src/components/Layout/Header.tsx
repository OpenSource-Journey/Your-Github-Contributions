import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';
import BrandImage from '../../assets/images/octocat.png';

const Header = () => {
  return (
    <nav>
      <Box
        borderBottom="1px solid"
        borderColor="gray.200"
        mx={{ base: 0, lg: 20 }}
        p={4}>
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
            <a
              href="https://www.producthunt.com/posts/your-github-contributions?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-your&#0045;github&#0045;contributions"
              rel="noreferrer"
              target="_blank">
              <img
                alt="Your&#0032;GitHub&#0032;Contributions - Generate&#0032;your&#0032;contributions&#0032;✨&#0032;summary&#0032;in&#0032;seconds | Product Hunt"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=380429&theme=light"
                width="250"
              />
            </a>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
};

export default Header;
