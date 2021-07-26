import {
  Button,
  Flex,
  Input,
  Image,
  Td,
  Tr,
  Box,
  Popover,
  PopoverTrigger,
  Modal as WrapModal,
  PopoverContent,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import Modal from 'components/Modal/Modal';
import Progress from 'components/Progress/Progress';
import React, { useState } from 'react';

interface PropTabPosition {
  data: any[];
}

export const TabPosition: React.FC<PropTabPosition> = ({ data }) => {
  // const [value, setValue] = useState(" ")
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleShowModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <WrapModal isOpen={isOpen} blockScrollOnMount={false} onClose={() => setIsOpen(!isOpen)} isCentered>
        <ModalOverlay width="100%" height="100%" />
        <ModalContent borderRadius="24px" py="0" color="white" bg="gray.800" maxWidth="480px">
          <Modal onClose={() => setIsOpen(!isOpen)} />
        </ModalContent>
      </WrapModal>

      {data?.map(e => (
        <Tr fontWeight="semibold" fontSize="12px" color="white" key={e.id}>
          <Td border="none"> {e.symbol}</Td>
          <Td border="none" color="teal.150">
            {e.size}
          </Td>
          <Td border="none">{e.entyPrice}</Td>
          <Td border="none">{e.markPrice}</Td>
          <Td border="none" color="cyan.150">
            {e.liqPrice}
          </Td>
          <Td border="none">{e.marginRatio}</Td>
          <Td border="none"> {e.margin}</Td>
          <Td border="none">{e.pnl}</Td>
          <Td border="none">
            <Flex color="cyan.150">
              <Button
                className="noneBoxShadowBtn"
                _hover={{ bg: 'none' }}
                bg="gray.800"
                border="1px"
                borderColor="cyan.150"
                borderRadius="4px"
                maxW="60px"
                maxH="22px"
                align="center"
                fontWeight="medium"
                fontSize="12px"
                w="100%"
                minH="22px"
              >
                Limit
              </Button>
              <Button
                className="noneBoxShadowBtn"
                _hover={{ bg: 'none' }}
                bg="gray.800"
                ml="10px"
                border="1px"
                borderColor="cyan.150"
                borderRadius="4px"
                maxW="60px"
                maxH="22px"
                align="center"
                fontWeight="medium"
                fontSize="12px"
                w="100%"
                minH="22px"
              >
                Market
              </Button>
              <Flex px="20px">
                <Input
                  border="1px"
                  borderColor="cyan.150"
                  borderRadius="4px"
                  maxW="94px"
                  maxH="22px"
                  align="center"
                  w="100%"
                  minH="22px"
                  textAlign="center"
                />

                <Popover>
                  <PopoverTrigger>
                    <Input
                      px="0px"
                      ml="20px"
                      border="1px"
                      borderColor="cyan.150"
                      borderRadius="4px"
                      maxW="94px"
                      maxH="22px"
                      align="center"
                      w="100%"
                      minH="22px"
                      textAlign="center"
                      value={`${value} %`}
                    />
                  </PopoverTrigger>
                  <PopoverContent border="0px" p="0px" borderRadius="24px">
                    <Progress value={value} setValue={val => setValue(val)} />
                  </PopoverContent>
                </Popover>
              </Flex>
            </Flex>
          </Td>
          <Td border="none" float="right">
            <Flex>
              <Box>--/--</Box>
              <Image onClick={handleShowModal} src="/img/pen.svg" />
            </Flex>
          </Td>
        </Tr>
      ))}
    </>
  );
};
