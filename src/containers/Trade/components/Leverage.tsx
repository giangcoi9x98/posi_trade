import { Flex, Text, Image } from '@chakra-ui/react';
import AdjustLeverageModal from 'components/AdjustLeverageModal';
import React, { useState } from 'react';

interface LeverageProps {
  value: string;
  setValue: (leverage: string) => void;
}

const Leverage: React.FC<LeverageProps> = ({ value, setValue }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handlerOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <Flex
      justify="center"
      align="center"
      justifyContent="space-between"
      my={['4px', '4px', '4px', '4px']}
      fontSize={['14px', '14px', '14px', '14px', '14px']}
      maxH={['24px', '24px', '24px', '24px']}
    >
      <Text color="white" fontWeight="semibold">
        Leverage
      </Text>
      <Flex bg="gray.700" borderRadius="8px" p="4px" justify="center" align="center">
        <AdjustLeverageModal
          isOpenModal={isOpenModal}
          onDismiss={() => setIsOpenModal(false)}
          valueLeverage={value}
          setValueLeverage={val => setValue(val)}
        />
        <Text color="teal.150" mr={['4px', '4px', '4px', '4px']}>
          {value}x
        </Text>
        <Image src="/img/setting.svg" onClick={handlerOpenModal} />
      </Flex>
    </Flex>
  );
};

export default Leverage;
