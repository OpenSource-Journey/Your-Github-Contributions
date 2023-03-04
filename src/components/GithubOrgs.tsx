import { Flex, Grid, Image, Link, Text } from '@chakra-ui/react';
import { OrganizationNode } from 'github-user-contribution-summary';

import React, { FC } from 'react';

interface Props {
  organizations: OrganizationNode[];
}
const GithubOrgs: FC<Props> = ({ organizations }) => {
  return (
    <>
      <Text fontWeight="medium" mb={4}>
        Organizations
      </Text>
      <Grid
        gap={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}>
        {organizations.map((userOrganization) => (
          <Link
            _hover={{
              textDecoration: 'underline',
              textDecorationColor: 'teal',
            }}
            href={userOrganization.url}
            key={userOrganization.name}
            target="_blank">
            <Flex alignItems="center" gap={8}>
              <Image
                alt={userOrganization.name}
                borderRadius="4px"
                boxSize="12"
                loading="lazy"
                src={userOrganization.avatarUrl}
              />
              <Text>{userOrganization.name}</Text>
            </Flex>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default GithubOrgs;
