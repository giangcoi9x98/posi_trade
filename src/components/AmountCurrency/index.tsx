import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface PropAmountCurrency {
  amount?: string;
  currency?: string;
  option?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const AmountCurrency: React.FC<PropAmountCurrency> = ({ amount, currency, option, color, fontSize, fontWeight }) => (
  <Box>
    {!option ? (
      <Flex fontSize={fontSize} fontWeight={fontWeight} color={color}>
        <Text> {amount || '--'} </Text>
        <Text> {currency}</Text>
      </Flex>
    ) : (
      <Box>( {currency} )</Box>
    )}
  </Box>
);

export default AmountCurrency;
