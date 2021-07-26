import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

interface PropTradeHistory {
  data?: any[];
}

const TradeHistory: React.FC<PropTradeHistory> = ({ data }) => {
  return (
    <>
      {data?.map(e => (
        <Tr fontWeight="semibold" fontSize="12px" color="white" key={e.id} w="100%">
          <Td border="none"> {e.time}</Td>
          <Td border="none"> {e.symbol}</Td>
          <Td border="none">{e.side}</Td>
          <Td border="none">{e.price}</Td>
          <Td border="none"> {e.quantity}</Td>
          <Td border="none">{e.fee}</Td>
          <Td border="none">{e.realizedProfit}</Td>
        </Tr>
      ))}
    </>
  );
};
export default TradeHistory;
