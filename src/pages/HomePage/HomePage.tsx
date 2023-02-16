import { Button, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import UserNameForm from '../../components/Forms/UserNamForm';

const HomePage = () => {
  return (
    <Grid gap={8}>
      <Link
        _hover={{ textDecoration: 'none' }}
        href="https://github.com/OpenSource-Journey/Your-Github-Contributions"
        target="_blank"
      >
        <Button
          border="1px"
          borderColor="gray.300"
          shadow="md"
          rounded="24px"
          display="block"
          margin="auto"
          leftIcon={<FaGithub className="star-on-github" />}
        >
          Star on GitHub
        </Button>
      </Link>
      <Text
        lineHeight={1}
        fontSize={{ base: '4xl', lg: '6xl' }}
        fontWeight="semibold"
        textAlign="center"
        mb={4}
      >
        Generate your contributions ✨ summary in seconds
      </Text>

      <UserNameForm />
    </Grid>
  );
};

export default HomePage;
