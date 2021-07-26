import { Box, Flex, Text, Collapse, Center } from '@chakra-ui/react';
import AmountCurrency from 'components/AmountCurrency';
import CheckBox from 'components/CheckBox';
import CustomSlider from 'components/CustomSlider';
import InputNumber from 'components/InputNumber';
import React, { memo, useEffect, useState } from 'react';
import ButtonTrade from './components/ButtonTrade';
import CanceledDropdowm from './components/CanceledDropdown';
import Leverage from './components/Leverage';
import MaskPrice from './components/MaskPrice';
import SlipPage from './components/SlipPage';
import TradeFooter from './components/TradeFooter';
import TradeTab from './components/TradeTab';

const Trade: React.FC = memo(
  () => {
    const [status, setStatus] = useState<string>('Open');
    const [statusTrade, setStatusTrade] = useState<string>('Limit');
    const [price, setPrice] = useState<string>('1');
    const [quantity, setQuantity] = useState<string>('');
    const [valueProgess, setValueProgess] = useState<number>(0);
    const [slipPageValue, setSlipPageValue] = useState<string>('0');
    const [isMaskPrice, setIsMaskPrice] = useState<boolean>(false);
    const [isReduceOnly, setIsReduceOnly] = useState<boolean>(false);
    const [leverage, setLeverage] = useState<string>('20');
    const [cancelType, setCancelType] = useState<string>('Good till cancelled');
    const avbl = 1000;
    useEffect(() => {
      const newQuantity = (avbl * valueProgess * Number(leverage)) / Number(price);
      setQuantity(newQuantity.toString());
    }, [valueProgess, price]);
    const [TP, setTP] = useState<{ takeProfit: string; option: string }>({
      takeProfit: '',
      option: 'Mark',
    });
    const [SL, setSL] = useState<{ stopLimit: string; option: string }>({
      stopLimit: '',
      option: 'Mark',
    });
    const [maxBy] = useState<{ buy: string; sell: string; currency: string }>({
      // setMaxBy
      buy: '0.01',
      sell: '0.01',
      currency: 'BTC',
    });
    const [cost] = useState<{ buy: string; sell: string; currency: string }>({
      // setCost
      buy: '0.01',
      sell: '0.01',
      currency: 'USDT',
    });
    return (
      <Flex
        w="100%"
        direction="column"
        bg="gray.800"
        borderRadius={['12px', '12px', '12px', '12px', '12px']}
        p={['10px', '10px', '10px', '10px', '10px']}
      >
        <TradeTab
          option={['Open', 'Close']}
          selectedOption={status}
          setSelectedOption={val => setStatus(val)}
          bg="gray.700"
          radius="8px"
          maxH="36px"
        />
        <TradeTab
          option={status === 'Open' ? ['Limit', 'Market', 'Stop Limit'] : ['Limit', 'Market']}
          selectedOption={statusTrade}
          setSelectedOption={val => setStatusTrade(val)}
          maxH="28px"
          fontSize="12px"
        />
        <Flex justifyContent="flex-end" fontSize="12px" pb={['8px', '8px', '8px', '8px', '8px']}>
          <Text textAlign="end" color="gray.500">
            Avbl:
          </Text>
          <AmountCurrency currency="USDT" color="colorsText.150" amount={avbl.toString()} />
        </Flex>
        <Leverage value={leverage} setValue={val => setLeverage(val)} />
        <Flex
          display={statusTrade === 'Stop Limit' ? 'flex' : 'none'}
          w="100%"
          align="center"
          mt={['10px', '10px', '10px', '10px', '10px']}
        >
          <Text w="50%" color="white" fontSize={['14px', '14px', '14px', '14px', '14px']} fontWeight="semibold">
            Stop Price{' '}
          </Text>
          <InputNumber value={price} setValue={val => setPrice(val)} isLast={() => setPrice('1106')} />
        </Flex>
        <Flex
          display={statusTrade === 'Market' ? 'none' : 'flex'}
          w="100%"
          align="center"
          mt={['10px', '10px', '10px', '10px', '10px']}
        >
          <Text w="50%" color="white" fontSize={['14px', '14px', '14px', '14px', '14px']} fontWeight="semibold">
            Price{' '}
          </Text>
          <InputNumber value={price} setValue={val => setPrice(val)} isLast={() => setPrice('1106')} />
        </Flex>
        <Flex w="100%" align="center" my={['12px', '12px', '12px', '12px', '12px']}>
          <Text w="50%" color="white" fontSize={['14px', '14px', '14px', '14px', '14px']} fontWeight="semibold">
            Quantity{' '}
          </Text>
          <InputNumber value={quantity} setValue={val => setQuantity(val)} />
        </Flex>
        <Center>
          <CustomSlider value={valueProgess} setValue={val => setValueProgess(val)} />
        </Center>
        <Flex direction="column" display={status === 'Open' ? 'flex' : 'none'}>
          <SlipPage value={slipPageValue} setValue={val => setSlipPageValue(val)} />
          <CheckBox
            title={statusTrade === 'Stop Limit' ? 'Buy Long with TP/SL' : 'TP/SL'}
            checked={isMaskPrice && !isReduceOnly}
            setChecked={val => setIsMaskPrice(val)}
            isDisable={isReduceOnly}
          />
          <Collapse in={isMaskPrice} animateOpacity>
            <MaskPrice
              TP={TP}
              SL={SL}
              setTPValue={val => setTP(state => ({ ...state, takeProfit: val }))}
              setTPOption={opt => setTP(state => ({ ...state, option: opt }))}
              setSLValue={val => setSL(state => ({ ...state, takeProfit: val }))}
              setSLOption={opt => setSL(state => ({ ...state, option: opt }))}
              isDisable={isReduceOnly}
            />
          </Collapse>
          <Flex justifyContent="space-between" align="center" justify="center">
            <CheckBox title={'Reduce only'} checked={isReduceOnly} setChecked={val => setIsReduceOnly(val)} />
            <CanceledDropdowm optionSelected={cancelType} setOption={(val: string) => setCancelType(val)} />
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-around"
          pt={['4px', '4px', '4px', '4px']}
          pb={['8px', '8px', '8px', '8px']}
          align="center"
          justify="center"
        >
          <Box w="45%">
            <ButtonTrade
              title={status === 'Open' ? 'Open Long' : 'Close Short'}
              bg="teal.150"
              currency={'USDT'}
              color="white"
              subColor="colorsText.50"
            />
          </Box>
          <Box w="45%">
            <ButtonTrade
              title={status === 'Open' ? 'Open Short' : 'Close Long'}
              bg="red.500"
              currency={'USDT'}
              color="white"
              subColor="colorsText.50"
            />
          </Box>
        </Flex>
        <TradeFooter maxBy={maxBy} cost={cost} status={status} />
      </Flex>
    );
  },
  () => false,
);

export default Trade;
