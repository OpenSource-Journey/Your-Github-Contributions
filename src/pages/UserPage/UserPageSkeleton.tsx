import {
  Box,
  Flex,
  Grid,
  GridItem,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

const UserPageSkeleton = () => {
  function uniqueId(): import('react').Key | null | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <Box>
      <SkeletonText
        endColor="#1a202c"
        mt="4"
        noOfLines={1}
        skeletonHeight="6"
        spacing="2"
        startColor="#4a5568"
      />
      <Grid
        gap={8}
        mt={8}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}>
        {Array.from({ length: 8 }).map(() => (
          <GridItem key={uniqueId()}>
            <Box
              as="div"
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              p={4}
              shadow="md">
              <SkeletonText
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                skeletonHeight="2"
                spacing="4"
                startColor="#4a5568"
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
        }}>
        <Box
          as="div"
          border="1px"
          borderColor="gray.200"
          borderRadius="4px"
          p={4}
          shadow="md">
          <Flex alignItems="center" height="100%" justifyContent="center">
            <SkeletonCircle size="80" />
          </Flex>
        </Box>
        <Box
          as="div"
          border="1px"
          borderColor="gray.200"
          borderRadius="4px"
          p={4}
          shadow="md">
          <Flex alignItems="center" height="100%" justifyContent="center">
            <SkeletonCircle size="80" />
          </Flex>
        </Box>
      </Grid>
      <Box
        as="div"
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        mt={8}
        p={4}
        shadow="md">
        <SkeletonText
          endColor="#1a202c"
          mt="4"
          noOfLines={8}
          skeletonHeight="2"
          spacing="4"
          startColor="#4a5568"
        />
      </Box>
      <Box
        as="div"
        border="1px"
        borderColor="gray.200"
        borderRadius="4px"
        mt={8}
        p={4}
        shadow="md">
        <Grid
          gap={8}
          mt={8}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}>
          {Array.from({ length: 6 }).map(() => (
            <GridItem key={uniqueId()}>
              <SkeletonText
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                skeletonHeight="2"
                spacing="4"
                startColor="#4a5568"
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
        }}>
        {Array.from({ length: 8 }).map(() => (
          <GridItem key={uniqueId()}>
            <Box
              as="div"
              border="1px"
              borderColor="gray.200"
              borderRadius="4px"
              p={4}
              shadow="md">
              <SkeletonText
                endColor="#1a202c"
                mt="4"
                noOfLines={2}
                skeletonHeight="2"
                spacing="4"
                startColor="#4a5568"
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default UserPageSkeleton;
