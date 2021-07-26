import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import OptionTab from 'components/OptionTab';
import { useState } from 'react';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/OptionTab',
  component: OptionTab,
} as Meta;

const Template: Story = () => {
  const option = ['open', 'close'];
  const [selectedOption, setSelecteOption] = useState<string>('open');
  return (
    <ChakraProvider theme={ThemeContext}>
      <OptionTab option={option} selectedOption={selectedOption} setSelectedOption={opt => setSelecteOption(opt)} />
    </ChakraProvider>
  );
};

export const OptionTabItem = Template.bind({});
