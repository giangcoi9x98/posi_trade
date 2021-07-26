import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import themeContext from './configs/Context/ThemeContext';

const Providers: React.FC = ({ children }: any) => (
  <Provider store={store}>
    <ChakraProvider theme={themeContext}>{children}</ChakraProvider>
  </Provider>
);

export default Providers;
