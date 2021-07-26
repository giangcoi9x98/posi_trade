import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import ListOfCurrencyPopup from '../ListOfCurrencyPopup';

const TitleChart = () => {
  return (
    <Flex w={'100%'} flexDirection={['row', 'row', 'row', 'row', 'column', 'column']} mb={'16px'}>
      <Flex
        w={['fit-content', 'fit-content', 'fit-content', 'fit-content', '100%', '100%']}
        alignItems={['unset', 'unset', 'unset', 'unset', 'center', 'center']}
        my={'auto'}
        minW={'40%'}
        justifyContent={'flex-start'}
        flexDirection={['column', 'column', 'column', 'column', 'row', 'row']}
      >
        <ListOfCurrencyPopup>
          <Flex alignItems={'center'} justifyContent={'flex-start'} cursor={'pointer'}>
            <Text
              fontSize={['16px', '20px', '20px', '20px', '28px', '32px']}
              fontWeight={600}
              color={'white'}
              mr={'10px'}
            >
              POSI
            </Text>
            <Image src={'/img/assets/posi-logo-transperant.svg'} w={['18px', '22px', '22px', '22px', '25px', '25px']} />
            <Image src={'/img/assets/arrow-down.svg'} ml={'10px'} w={'12px'} />
          </Flex>
        </ListOfCurrencyPopup>
        <Text color={'red.400'} ml={['0px', '0px', '0px', '0px', '16px', '16px']} fontSize={'18px'} fontWeight={600}>
          39266.00
        </Text>
      </Flex>
      <Flex
        w={'100%'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        flexDirection={['row', 'row', 'row', 'row', 'row', 'row']}
        flexWrap={'wrap'}
      >
        <Flex flexDirection={'column'} w={['50%', '50%', '50%', '50%', 'fit-content', 'fit-content']}>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'gray.500'}>
            24h Change %
          </Text>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
            + 5.86%
          </Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          ml={['0px', '0px', '0px', '0px', '16px', '16px']}
          w={['50%', '50%', '50%', '50%', 'fit-content', 'fit-content']}
        >
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'gray.500'}>
            24H High
          </Text>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
            39408.00
          </Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          ml={['0px', '0px', '0px', '0px', '16px', '16px']}
          w={['50%', '50%', '50%', '50%', 'fit-content', 'fit-content']}
        >
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'gray.500'}>
            24H Low
          </Text>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
            39408.00
          </Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          ml={['0px', '0px', '0px', '0px', '16px', '16px']}
          w={['50%', '50%', '50%', '50%', 'fit-content', 'fit-content']}
        >
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'gray.500'}>
            24H Turnover (USDT)
          </Text>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
            3,690,458.10
          </Text>
        </Flex>
        <Flex flexDirection={'column'} ml={['0px', '0px', '0px', '0px', '16px', '16px']} w={'fit-content'}>
          <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'gray.500'}>
            Predicted Rate/ Countdown
          </Text>
          <Flex w={'100%'} justifyContent={'space-between'}>
            <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
              -0.0106%
            </Text>
            <Text fontSize={['12px', '12px', '12px', '12px', '14px', '14px']} color={'white'} fontWeight={'semibold'}>
              05:20:00
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TitleChart;
