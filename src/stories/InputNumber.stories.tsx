import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import InputNumber from '../components/InputNumber';
import themeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/InputNumber',
  component: InputNumber,
} as Meta;

const Template: Story = () => {
  const [value, setValue] = useState('0');
  const [optionSelected, setOptionSelected] = useState('');
  const option = ['giang', 'chien', 'vuong', 'tungngu'];
  return (
    <ChakraProvider theme={themeContext}>
      <InputNumber
        value={value}
        setValue={val => setValue(val)}
        isLast
        optionSelected={optionSelected}
        option={option}
        setOption={opt => setOptionSelected(opt)}
      />
    </ChakraProvider>
  );
};

export const InputNumberItem = Template.bind({});
