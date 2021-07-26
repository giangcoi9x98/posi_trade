import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import themeContext from 'configs/Context/ThemeContext';
import SlipPage from 'containers/Trade/components/SlipPage';

export default {
  title: 'Example/SlipPage',
  component: SlipPage,
} as Meta;

const Template: Story = () => {
  const [value, setValue] = useState('0.0');
  return (
    <ChakraProvider theme={themeContext}>
      <SlipPage value={value} setValue={val => setValue(val)} />
    </ChakraProvider>
  );
};

export const SlipPageItem = Template.bind({});
