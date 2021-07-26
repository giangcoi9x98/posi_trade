import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import CheckBox from 'components/CheckBox';
import { useState } from 'react';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ChakraProvider theme={ThemeContext}>
      <CheckBox title="GIANG" checked={isChecked} setChecked={val => setIsChecked(val)} />
    </ChakraProvider>
  );
};

export const CheckBoxs = Template.bind({});
