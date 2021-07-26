import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import ThemeContext from 'configs/Context/ThemeContext';
import Modal from 'components/Modal/Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta;

const Template: Story = () => (
  <ChakraProvider theme={ThemeContext}>
    <Modal onClose={() => false} />
  </ChakraProvider>
);
export const ModalTSPL = Template.bind({});
