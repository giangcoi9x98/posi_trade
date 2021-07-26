import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import 'index.css';
import InputNumber from 'components/InputNumber';

interface MaskPriceProps {
  TP: {
    takeProfit: string;
    option: string;
  };
  SL: {
    stopLimit: string;
    option: string;
  };
  setTPValue: (state: any) => any;
  setTPOption: (state: any) => any;
  setSLValue: (state: any) => any;
  setSLOption: (state: any) => any;
  isShow?: boolean;
  isDisable: boolean;
}

const MaskPrice: React.FC<MaskPriceProps> = ({
  TP,
  SL,
  setTPOption,
  setTPValue,
  setSLOption,
  setSLValue,
  isDisable,
}) => {
  const opts = ['Mark', 'Last'];
  return (
    <Flex direction="column" bg="gray.800">
      <Flex alignItems="center">
        <Box
          w="40%"
          fontWeight="semibold"
          fontSize={['14px', '14px', '14px', '14px', '14px']}
          color={isDisable ? 'colorsText.0' : 'white'}
        >
          Take Profit
        </Box>
        <InputNumber
          value={TP.takeProfit}
          setValue={val => setTPValue(val)}
          option={opts}
          optionSelected={TP.option}
          setOption={opt => setTPOption(opt)}
          isDisable={isDisable}
        />
      </Flex>
      <Flex pt="12px" alignItems="center">
        <Box
          w="40%"
          fontWeight="semibold"
          fontSize={['14px', '14px', '14px', '14px', '14px']}
          color={isDisable ? 'colorsText.0' : 'white'}
        >
          Stop Loss
        </Box>
        <InputNumber
          value={SL.stopLimit}
          setValue={val => setSLValue(val)}
          option={opts}
          optionSelected={SL.option}
          setOption={opt => setSLOption(opt)}
          isDisable={isDisable}
        />
      </Flex>
    </Flex>
  );
};

export default MaskPrice;
