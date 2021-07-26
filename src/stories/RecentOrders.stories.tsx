import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import RecentOrder from '../containers/RecentOrders/RecentOrders';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/RecentOrder',
  component: RecentOrder,
} as Meta;

const Template: Story = () => (
  <ChakraProvider theme={ThemeContext}>
    <RecentOrder />
  </ChakraProvider>
);

export const RecentOrders = Template.bind({});
