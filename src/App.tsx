import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Header from "./components/Layout/Header";

import "./App.css";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer
        style={{ width: "400px" }}
        closeOnClick
        theme="dark"
        pauseOnFocusLoss
      />
      <Router>
        <Header />
        <Box as="main" p={8} my={4} px={{ base: "18", lg: "36" }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
