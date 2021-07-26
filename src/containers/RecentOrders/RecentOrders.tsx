import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import { v4 as uuidv4 } from 'uuid';
// import { useMount } from 'react-use';
import ItemOrderData from '../../components/OrderData/ItemOrderData';

const OrderBook: React.FC = memo(() => {
  const [dataList] = useState<Array<{ price: string; amount: string; sum: string; id: string }>>([
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '1',
    },
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '2',
    },
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '3',
    },
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '4',
    },
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '5',
    },
    {
      price: '1000',
      amount: '2000',
      sum: '3000',
      id: '6',
    },
  ]);
  // let time: any = null;
  //
  // useMount(() => {
  //   clearInterval(time);
  //   time = setInterval(() => {
  //     setDataList(state => {
  //       if (state.length < 200) {
  //         state.unshift({
  //           price: Math.random().toFixed(2).toString(),
  //           amount: Math.random().toFixed(2).toString(),
  //           sum: Math.random().toFixed(2).toString(),
  //           id: uuidv4(),
  //         })
  //         return state;
  //       } else {
  //         state.unshift({
  //           price: Math.random().toFixed(2).toString(),
  //           amount: Math.random().toFixed(2).toString(),
  //           sum: Math.random().toFixed(2).toString(),
  //           id: uuidv4(),
  //         })
  //         state.slice(0, 200)
  //         return state;
  //       }
  //     });
  //   }, 200);
  //   return () => {
  //     clearInterval(time);
  //   };
  // });

  return (
    <Box bg="gray.800" w={'100%'} py="10px" borderRadius="8px">
      <Text color="white" fontSize={['16px', '16px', '16px']} fontWeight="semibold" px="20px" pb="16px">
        Recent Orders
      </Text>
      <SimpleGrid
        columns={3}
        spacing={10}
        bg="gray.700"
        fontSize={['14px', '14px', '14px']}
        fontWeight="semibold"
        color="white"
        h="30px"
        lineHeight="30px"
        px="20px"
      >
        <Box> Price </Box>
        <Box> Amount </Box>
        <Box> Sum </Box>
      </SimpleGrid>
      <Box px="20px" h={'170px'} className={'order-list'} maxH={'170px'} overflow={'auto'}>
        <AutoSizer disableWidth>
          {({}) => (
            <>
              {dataList?.map(e => (
                <Box key={`licsst${e.id}`}>
                  <ItemOrderData price={e.price} amount={e.amount} sum={e.sum} color="teal.150" />
                </Box>
              ))}
            </>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
});

export default OrderBook;
