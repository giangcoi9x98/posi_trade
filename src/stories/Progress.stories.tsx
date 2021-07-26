import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import Progress from 'components/Progress';
import themeContext from 'configs/Context/ThemeContext';

export default {
  title: 'Example/Progress',
  component: Progress,
} as Meta;

const Template: Story = () => {
  const [value, setValue] = useState(0);
  return (
    <ChakraProvider theme={themeContext}>
      <Progress value={value} setValue={val => setValue(val)} />
    </ChakraProvider>
  );
};

export const ProgressItem = Template.bind({});
