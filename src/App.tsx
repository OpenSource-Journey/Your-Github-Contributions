import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ToastMessage from './components/ToastMessage/ToastMessage';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ToastMessage />
      <Router>
        <Header />
        <Box as="main" my={4} p={8} px={{ base: '18', lg: '36' }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
