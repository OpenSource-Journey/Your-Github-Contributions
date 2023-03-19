import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppRoutes from './AppRoutes';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import ToastMessage from './components/ToastMessage/ToastMessage';

export const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <ToastMessage />
        <Router>
          <ErrorFallback>
            <Header />
            <Box as="main" my={4} p={8} px={{ base: '18', lg: '36' }}>
              <AppRoutes />
            </Box>
            <Footer />
          </ErrorFallback>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
};
