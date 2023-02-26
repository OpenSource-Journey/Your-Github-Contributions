import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";

const ToastMessage = () => {
  const colorModeConfig = useColorMode();
  return (
    <ToastContainer
      closeOnClick
      theme={colorModeConfig.colorMode === "dark" ? "dark" : "light"}
      pauseOnFocusLoss
    />
  );
};

export default ToastMessage;
