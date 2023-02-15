import * as React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Button,
  Link,
  Grid,
} from '@chakra-ui/react';
import Header from './components/Header';
import UserNameForm from './components/UserNamForm';
import { FaGithub } from 'react-icons/fa';
import './App.css';
import Footer from './components/Footer';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="main" p={8} my={4} px={{ base: '18', lg: '36' }}>
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
            Generate your contributions summary in seconds
          </Text>

          <UserNameForm />
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
