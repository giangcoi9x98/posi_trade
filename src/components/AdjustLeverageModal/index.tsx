import React, { useState } from 'react';
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
  Button,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

interface AdjustLeverageModalProps {
  isOpenModal: boolean;
  onDismiss: () => void;
  setValueLeverage: (val: string) => void;
  valueLeverage: string;
}

const AdjustLeverageModal = ({ isOpenModal, onDismiss, setValueLeverage, valueLeverage }: AdjustLeverageModalProps) => {
  const [isLargerThan768] = useMediaQuery('(max-width: 1368px ) and (min-width: 0px )');

  const [leverageValue, setLeverageValue] = useState<number>(Number(valueLeverage));

  const handleIncrement = () => {
    if (leverageValue < 125) setLeverageValue(leverageValue + 1);
  };

  const handleDecrement = () => {
    if (leverageValue > 1) setLeverageValue(leverageValue - 1);
  };

  const handleClose = () => {
    onDismiss();
  };

  const handleChangeLeverage = (value: number) => {
    if (value === 0) {
      setLeverageValue(1);
    } else {
      setLeverageValue(Math.round(value * 1.25));
    }
  };

  const renderValueUSDT = (val: number) => {
    if (val === 2) {
      return '300,000,000';
    } else if (val === 3) {
      return '200,000,000';
    } else if (val === 4) {
      return '100,000,000';
    } else if (val === 5) {
      return '50,000,000';
    } else if (val >= 6 && val <= 10) {
      return '20,000,000';
    } else if (val <= 20) {
      return '10,000,000';
    } else if (val <= 50) {
      return '1,000,000';
    } else if (val <= 100) {
      return '250,000';
    }
    return '50,000';
  };

  const handleConfirm = (val: string) => {
    setValueLeverage(val);
    onDismiss();
  };

  return (
    <Modal
      size={'md'}
      isCentered={!isLargerThan768}
      blockScrollOnMount={false}
      isOpen={isOpenModal}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent background={'gray.800'} py={0} px={0}>
        <ModalHeader pb={'0px'} color={'teal.150'} fontSize="18px" textAlign={'left'} mt={'8px'}>
          Adjust Leverage
        </ModalHeader>
        <ModalCloseButton onClick={handleClose} color={'gray.500'} mt={'16px'} />

        <ModalBody>
          <Divider my={'10px'} />
          <Text fontSize={'14px'} color={'white'} mt={'20px'}>
            Leverage
          </Text>
          <Flex w={'50%'} mt={'10px'}>
            <Flex
              w={'100%'}
              alignItems={'center'}
              justifyContent={'space-between'}
              background={'gray.700'}
              p={'5px'}
              borderRadius={'10px'}
              borderWidth={1}
              borderColor={leverageValue >= 21 ? 'red.400' : 'gray.700'}
            >
              <Flex onClick={handleDecrement} p={'10px'} cursor={'pointer'} bg={'teal.150'} borderRadius={'10px'}>
                <MinusIcon color={'white'} w={'12px'} h={'12px'} />
              </Flex>
              <Flex color={'white'}>{leverageValue}x</Flex>
              <Flex onClick={handleIncrement} p={'10px'} cursor={'pointer'} bg={'teal.150'} borderRadius={'10px'}>
                <AddIcon color={'white'} w={'12px'} h={'12px'} />
              </Flex>
            </Flex>
          </Flex>
          <Flex mt={'16px'}>
            <Slider aria-label="slider-ex-1" value={leverageValue / 1.25} onChange={handleChangeLeverage}>
              <SliderTrack bg="gray.700">
                <SliderFilledTrack bg="teal.150" />
              </SliderTrack>
              <SliderThumb boxSize={4}>
                <Image src="/img/assets/dot.svg" w={'10px'} h={'10px'} />
              </SliderThumb>
            </Slider>
          </Flex>
          {leverageValue >= 2 && (
            <Flex mt={'16px'} color={'gray.500'} fontSize={'13px'}>
              Maximum position at current leverage : {renderValueUSDT(leverageValue)} USDT
            </Flex>
          )}
          {leverageValue >= 21 && (
            <Flex mt={'16px'} color={'red.400'} fontSize={'13px'}>
              Your leverage is high, please manage your risk accordingly.
            </Flex>
          )}
          <Flex mt={'16px'} w={'100%'} justifyContent={'space-between'}>
            <Button
              onClick={() => handleConfirm(leverageValue.toString())}
              borderRadius={'24px'}
              h={'48px'}
              w={'48%'}
              className={'primary'}
            >
              Confirm
            </Button>
            <Button borderRadius={'24px'} onClick={handleClose} className={'secondary'} h={'48px'} w={'48%'}>
              Cancel
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AdjustLeverageModal;
