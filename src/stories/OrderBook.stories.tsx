import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import OrderBook from '../containers/OrderBook/OrderBook';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/OrderBook',
  component: OrderBook,
} as Meta;

const Template: Story = () => (
  <ChakraProvider theme={ThemeContext}>
    <OrderBook buy="39266.00" sell="39266.00" />
  </ChakraProvider>
);

export const OrderBooks = Template.bind({});
