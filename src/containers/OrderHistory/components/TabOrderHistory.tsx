import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

interface PropTabOrderHistory {
  data: any[];
}

const TabOrderHistory: React.FC<PropTabOrderHistory> = ({ data }) => {
  return (
    <>
      {data?.map(e => (
        <Tr fontWeight="semibold" fontSize="12px" color="white" key={e.id}>
          <Td border="none">{e.time}</Td>
          <Td border="none">{e.symbol}</Td>
          <Td border="none"> {e.type}</Td>
          <Td border="none">{e.side}</Td>
          <Td border="none">{e.average}</Td>
          <Td border="none">{e.price}</Td>
          <Td border="none">{e.excuted}</Td>
          <Td border="none">{e.amount}</Td>
          <Td border="none"> {e.reduceOnly}</Td>
          <Td border="none">{e.postOnly}</Td>
          <Td border="none"> {e.triggerConditions}</Td>
        </Tr>
      ))}
    </>
  );
};

export default TabOrderHistory;
