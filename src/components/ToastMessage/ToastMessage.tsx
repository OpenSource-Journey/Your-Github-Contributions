import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastMessage = () => {
  const colorModeConfig = useColorMode();

  return (
    <ToastContainer
      closeOnClick
      pauseOnFocusLoss
      theme={colorModeConfig.colorMode === 'dark' ? 'dark' : 'light'}
    />
  );
};

export default ToastMessage;
