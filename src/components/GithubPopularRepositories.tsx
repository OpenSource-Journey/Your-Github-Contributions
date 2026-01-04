import { Flex, Grid, Icon, Link, Text, useColorMode } from '@chakra-ui/react';
import { PinnedItemNode } from 'github-user-contribution-summary';
import { FC } from 'react';
import { AiOutlineStar, BiGitRepoForked } from 'react-icons/all';
import { GoRepo } from 'react-icons/go';
import { getIconByLanguage } from 'utils/iconUtils';

interface Props {
  repositories: PinnedItemNode[];
}

const GithubPopularRepositories: FC<Props> = ({ repositories = [] }) => {
  const { colorMode } = useColorMode();

  const validRepositories = repositories.filter((repo) => repo && repo.url);

  if (validRepositories.length === 0) {
    return null;
  }

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
        }}>
        {validRepositories.map((repository) => {
          const primaryLanguage = repository.primaryLanguage;

          return (
            <Link
              _hover={{
                background:
                  colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100',
                textDecoration: 'none',
              }}
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              href={repository.url}
              key={repository.nameWithOwner}
              p={2}
              target="_blank">
              <Flex alignItems="center" gap={2}>
                <GoRepo />

                <Text>{repository.nameWithOwner}</Text>

                {primaryLanguage && (
                  <Icon
                    as={getIconByLanguage(primaryLanguage.name)}
                    color={primaryLanguage.color}
                    marginLeft="auto"
                  />
                )}
              </Flex>

              {repository.description && (
                <Text color="gray.500" mt={1}>
                  {repository.description}
                </Text>
              )}

              <Flex marginTop={1}>
                <Flex alignItems="center" mr={5}>
                  <AiOutlineStar />
                  <Text color="GrayText" paddingLeft={1}>
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
