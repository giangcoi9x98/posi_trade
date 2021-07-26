import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import OrderHistory from '../containers/OrderHistory/OrderHistory';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/OrderHistory',
  component: OrderHistory,
} as Meta;

const Template: Story = () => (
  <ChakraProvider theme={ThemeContext}>
    <OrderHistory />
  </ChakraProvider>
);

export const OrderHistorys = Template.bind({});
