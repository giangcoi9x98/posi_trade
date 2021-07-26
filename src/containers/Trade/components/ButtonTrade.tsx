import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface PropButtonTrade {
  title: string;
  amount?: string;
  currency?: string;
  bg?: string;
  color?: string;
  subColor?: string;
}

const ButtonTrade: React.FC<PropButtonTrade> = ({ title, amount, currency, bg, color, subColor }) => (
  <Button
    maxH={['80px', '80px', '80px']}
    w="100%"
    bg={bg}
    color={color}
    _hover={{ bg: `${bg}` }}
    _active={{ bg: `${bg}` }}
    borderRadius="12px"
  >
    {' '}
    <Box as="pre">
      <Text fontSize={['12px', '12px', '12px']} fontWeight="semibold">
        {title}
      </Text>
      <Flex
        fontSize={['8px', '8px', '8px']}
        fontWeight="semibold"
        pt="5px"
        color={subColor}
        align="center"
        justify="center"
      >
        <Text> {amount}</Text>
        <Text> {currency}</Text>
      </Flex>
    </Box>
  </Button>
);

export default ButtonTrade;
