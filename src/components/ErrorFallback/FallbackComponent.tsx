import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box px={6} py={10} textAlign="center">
      <Heading
        as="h2"
        backgroundClip="text"
        bgGradient="linear(to-r, teal.400, teal.600)"
        display="inline-block"
        size="2xl"
      >
        404
      </Heading>
      <Text fontSize="18px" mb={2} mt={3}>
        {error.name}
      </Text>
      <Text color="gray.500" mb={6}>
        {error.message}
      </Text>

      <Button
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        colorScheme="teal"
        variant="solid"
        onClick={resetErrorBoundary}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default FallbackComponent;
