import { Flex, Grid, Icon, Link, Text, useColorMode } from '@chakra-ui/react';
import { PinnedItemNode } from 'github-user-contribution-summary';
import { FC } from 'react';
import { AiOutlineStar, BiGitRepoForked } from 'react-icons/all';
import { GoRepo } from 'react-icons/go';
import { getIconByLanguage } from 'utils/iconUtils';

interface Props {
  repositories: PinnedItemNode[];
}

const GithubPopularRepositories: FC<Props> = ({ repositories }) => {
  const colorMode = useColorMode();

  return (
    <>
      <Text fontWeight="medium" mb={4}>
        Popular Repositories
      </Text>
      <Grid
        gap={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {repositories.map((repository) => {
          if (Object.entries(repository).length === 0) {
            return <></>;
          }

          return (
            <Link
              _hover={{
                textDecoration: 'none',
                background:
                  colorMode.colorMode === 'dark'
                    ? 'whiteAlpha.200'
                    : 'gray.100',
              }}
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              href={repository.url}
              key={repository.name}
              p={2}
              target="_blank"
            >
              <Flex gap={2}>
                <GoRepo style={{ alignSelf: 'center' }} />
                <Text>{repository.nameWithOwner}</Text>
                <Icon
                  alignSelf="center"
                  as={getIconByLanguage(repository.primaryLanguage.name)}
                  color={repository.primaryLanguage.color}
                  marginLeft="auto"
                />
              </Flex>

              <Text color="gray.500" mt={1}>
                {repository.description}
              </Text>

              <Flex marginTop={1}>
                <Flex alignItems="center">
                  <AiOutlineStar />
                  <Text color="GrayText" paddingLeft={1} paddingRight={5}>
                    {repository.stargazerCount}
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <BiGitRepoForked />
                  <Text color="GrayText" paddingLeft={1}>
                    {repository.forkCount}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default GithubPopularRepositories;
