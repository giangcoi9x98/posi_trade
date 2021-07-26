import React, { memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ContractDetail = memo(() => {
  return (
    <Flex
      w={'100%'}
      h={'fit-content'}
      flexDirection={'column'}
      py={'24px'}
      px={'16px'}
      borderRadius={'8px'}
      bg={'gray.800'}
    >
      <Flex
        w={'100%'}
        fontSize={['18px', '16px', '16px', '16px', '18px', '18px']}
        color={'white'}
        fontWeight={'semibold'}
        mb={'10px'}
      >
        Contract Details BTCUSDT
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Expiration Date
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Perpetual
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Index price
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          39096.96
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Mark Price
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          39095.75
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Open Interest
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          2,120.462 BTC
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          24h Turnover
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          367,094,891.78 USDT
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          24h Volume
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          9,681.362 BTC
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Contract Value
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          9,681.362 BTC
        </Text>
      </Flex>
    </Flex>
  );
});

export default ContractDetail;
