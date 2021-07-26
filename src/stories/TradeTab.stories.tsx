import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import TradeTop from 'containers/Trade/components/TradeTab';
import { useState } from 'react';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/TradeTop',
  component: TradeTop,
} as Meta;

const Template: Story = () => {
  const option = ['Limit', 'Market', 'Stop Limit'];
  const [selectedOption, setSelecteOption] = useState<string>('Limit');
  return (
    <ChakraProvider theme={ThemeContext}>
      <TradeTop option={option} selectedOption={selectedOption} setSelectedOption={opt => setSelecteOption(opt)} />
    </ChakraProvider>
  );
};

export const TradeTopItem = Template.bind({});
