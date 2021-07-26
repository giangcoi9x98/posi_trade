import { Box, Text, SimpleGrid, Flex, Image, Spacer } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { useMount } from 'react-use';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import ItemOrderData from '../../components/OrderData/ItemOrderData';
import Dropdown from '../../components/Dropdown';

interface PropOrderBook {
  buy: string;
  sell: string;
}

const OrderBook: React.FC<PropOrderBook> = memo(({ buy, sell }) => {
  const [optionSelected, setOptionSelected] = useState('1');
  const option = ['1', '2', '3', '4'];
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
      <Flex px="20px" pb="20px">
        <Text color="white" fontSize={['16px', '16px', '16px']} fontWeight="semibold">
          Order book
        </Text>
        <Spacer />
        <Image src="/img/external-link.svg" w="24px" h="24px" cursor="pointer" />
      </Flex>
      <Flex px="20px" mb="10px">
        <Image src="/img/presentation-chart-bar.svg" w="20px" h="20px" mr="10px" cursor="pointer" />
        <Image src="/img/presentation-chart-line.svg" w="20px" h="20px" mx="10px" cursor="pointer" />
        <Image src="/img/trending-down.svg" w="20px" h="20px" mx="10px" cursor="pointer" />
        <Image src="/img/trending-up.svg" w="20px" h="20px" mx="10px" cursor="pointer" />
        <Spacer />
        <Dropdown
          w="66px"
          h="24px"
          optionSelected={optionSelected}
          option={option}
          setOption={opt => setOptionSelected(opt)}
        />
      </Flex>
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
      <Box px="20px" h={'170px'} maxH={'170px'} overflow={'hidden'}>
        <AutoSizer disableWidth>
          {({}) => (
            <>
              {dataList?.map(e => (
                <Box key={e.id}>
                  <ItemOrderData price={e.price} amount={e.amount} sum={e.sum} color="red.400" />
                </Box>
              ))}
            </>
          )}
        </AutoSizer>
      </Box>
      <SimpleGrid columns={2} textAlign="center" bg="gray.700" my="10px" h="30px" lineHeight="30px">
        <Flex align="center" justify="center">
          <Image src="/img/arrow-down.svg" />
          <Box color="red.400" fontWeight="medium" fontSize={['12px', '12px', '12px']}>
            {sell}
          </Box>
        </Flex>
        <Flex>
          <Image src="/img/flag.svg" />
          <Box color="blue.400" fontWeight="medium" fontSize={['12px', '12px', '12px']}>
            {buy}
          </Box>
        </Flex>
      </SimpleGrid>
      <Box px="20px" h={'170px'} maxH={'170px'} overflow={'hidden'}>
        <AutoSizer disableWidth>
          {({}) => (
            <>
              {dataList?.map(e => (
                <Box key={`lisst${e.id}`}>
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
