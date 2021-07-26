import React, { memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const AssetsComponent = memo(() => {
  return (
    <Flex
      w={'100%'}
      h={'fit-content'}
      flexDirection={'column'}
      py={'24px'}
      px={'16px'}
      borderRadius={'8px'}
      bg={'gray.800'}
      my={'10px'}
    >
      <Flex
        w={'100%'}
        fontSize={['18px', '16px', '16px', '16px', '18px', '18px']}
        color={'white'}
        fontWeight={'semibold'}
        mb={'10px'}
      >
        Assets
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Total equity
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          -- USDT
        </Text>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} my={'5px'}>
        <Text color={'gray.500'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          Available balance
        </Text>
        <Text color={'white'} fontSize={['13px', '11px', '11px', '11px', '13px', '13px']}>
          -- USDT
        </Text>
      </Flex>
    </Flex>
  );
});

export default AssetsComponent;
