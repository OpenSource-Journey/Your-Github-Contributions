import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Layout/Header';

import './App.css';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Box as="main" p={8} my={4} px={{ base: '18', lg: '36' }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
