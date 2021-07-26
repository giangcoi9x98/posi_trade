import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import Dropdown from '../components/Dropdown';
import ThemeContext from '../configs/Context/ThemeContext';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = () => (
  <ChakraProvider theme={ThemeContext}>
    <Dropdown />
  </ChakraProvider>
);

export const Dropdowns = Template.bind({});
