import {
  Box,
  Flex,
  Grid,
  GridItem,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

const UserPageSkeleton = () => {
  return (
    <Box>
      <SkeletonText
        startColor="#4a5568"
        endColor="#1a202c"
        mt="4"
        noOfLines={1}
        spacing="2"
        skeletonHeight="6"
      />
      <Grid
        gap={8}
        mt={8}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {Array.from({ length: 8 }).map(() => (
          <GridItem>
            <Box
              as="div"
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              p={4}
              shadow="md"
            >
              <SkeletonText
                startColor="#4a5568"
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Grid
        gap={8}
        mt={8}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <Box
          as="div"
          border="1px"
          borderColor="gray.200"
          borderRadius="4px"
          p={4}
          shadow="md"
        >
          <Flex height="100%" justifyContent="center" alignItems="center">
            <SkeletonCircle size="80" />
          </Flex>
        </Box>
        <Box
          as="div"
          border="1px"
          borderColor="gray.200"
          borderRadius="4px"
          p={4}
          shadow="md"
        >
          <Flex height="100%" justifyContent="center" alignItems="center">
            <SkeletonCircle size="80" />
          </Flex>
        </Box>
      </Grid>
      <Box
        mt={8}
        as="div"
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        p={4}
        shadow="md"
      >
        <SkeletonText
          startColor="#4a5568"
          endColor="#1a202c"
          mt="4"
          noOfLines={8}
          spacing="4"
          skeletonHeight="2"
        />
      </Box>
      <Box
        mt={8}
        as="div"
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        p={4}
        shadow="md"
      >
        <Grid
          gap={8}
          mt={8}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {Array.from({ length: 6 }).map(() => (
            <GridItem>
              <SkeletonText
                startColor="#4a5568"
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                spacing="4"
                skeletonHeight="2"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Grid
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        gap={8}
        mt={8}
        p={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {Array.from({ length: 8 }).map(() => (
          <GridItem>
            <Box
              as="div"
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              p={4}
              shadow="md"
            >
              <SkeletonText
                startColor="#4a5568"
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default UserPageSkeleton;
