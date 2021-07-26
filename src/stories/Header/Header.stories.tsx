import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Meta } from '@storybook/react';
import Header from 'containers/Header/Header';
import ThemeContext from 'configs/Context/ThemeContext';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

export const Menu: React.FC = () => (
  <ChakraProvider theme={ThemeContext}>
    <Header />
  </ChakraProvider>
);
