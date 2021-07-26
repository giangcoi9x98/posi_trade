import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

interface PropItemOrderData {
  price: string;
  amount: string;
  sum: string;
  color?: string;
}

const itemOrderData: React.FC<PropItemOrderData> = ({ price, amount, sum, color }) => (
  <SimpleGrid columns={3} spacing={10} fontSize={['12px', '12px', '12px']} fontWeight="medium" mt="5px">
    <Box color={color}> {price}</Box>
    <Box color="gray.400"> {amount}</Box>
    <Box color="gray.400"> {sum}</Box>
  </SimpleGrid>
);

export default itemOrderData;
