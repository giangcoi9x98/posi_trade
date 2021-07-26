import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

interface PropOpenOrder {
  data: any[];
}

const OpenOrder: React.FC<PropOpenOrder> = ({ data }) => {
  return (
    <>
      {data?.map(e => (
        <Tr fontWeight="semibold" key={e.id} fontSize="12px" color="white">
          <Td border="none">{e.time}</Td>
          <Td border="none"> {e.symbol}</Td>
          <Td border="none">{e.type}</Td>
          <Td border="none">{e.side}</Td>
          <Td border="none"> {e.price}</Td>
          <Td border="none">{e.amount}</Td>
          <Td border="none">{e.frilled}</Td>
          <Td border="none"> {e.reduceOnly}</Td>
          <Td border="none">{e.postOnly}</Td>
          <Td border="none"> {e.triggerOnditions}</Td>
          <Td border="none"> {e.tpsl}</Td>
        </Tr>
      ))}
    </>
  );
};

export default OpenOrder;
