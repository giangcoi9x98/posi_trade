import { Box, Button, Divider, Flex, Input, Spacer, Image, Code } from '@chakra-ui/react';
import React from 'react';

interface ModalProps {
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <Box w="100%" px="32px">
        {/* header_modal */}

        <Flex py="28px" align="center">
          <Box w="95%" color="teal.150" fontSize="24px" fontWeight="semibold">
            TP/SL for entire position{' '}
          </Box>
          <Image src="/img/close.svg" onClick={() => onClose()} />
        </Flex>
        <Divider />

        {/* end_header_modal */}

        {/* Content_modal */}

        <Box fontSize="14px" fontWeight="medium" color="gray.500" px="0px">
          <Flex py="8px">
            <Box>Symbol</Box>
            <Spacer />
            <Box color="teal.150">IOTAUSDT Perpetual / Long 20x</Box>
          </Flex>
          <Flex py="8px">
            <Box>Entry Price (USDT)</Box>
            <Spacer />
            <Box>1.7570</Box>
          </Flex>
          <Flex py="8px">
            <Box>Mark Price (USDT)</Box>
            <Spacer />
            <Box>1.0649</Box>
          </Flex>
          <Divider my="8px" />

          {/* input----------1 */}

          <Flex pt="8px" pb="16px">
            <Flex
              px="10px"
              align="center"
              maxW="186px"
              w="100%"
              border="1px"
              h="36px"
              borderColor="gray.600"
              borderRadius="8px"
            >
              <Box w="90%" color="white">
                Mark Price
              </Box>
              <Image boxSize="14px" src="/img/swap.svg" />
            </Flex>
            <Spacer />
            <Flex align="center" maxW="200px" h="36px" borderColor="gray.600" borderRadius="8px" border="1px">
              <Input w="90%" border="0px" placeholder="Take Profit" />
              <Box color="white" pr="10px">
                USDT
              </Box>
            </Flex>
          </Flex>

          {/* end_input----------1 */}

          <Box my="16px" bg="gray.700" borderRadius="8px" p="14px">
            When{' '}
            <Code color="white" bg="none">
              Mark Price
            </Code>{' '}
            reaches{' '}
            <Code color="white" bg="none">
              0.00
            </Code>
            , it will trigger Take Profit Market order to close this position. Estimated PNL will be{' '}
            <Code bg="none" color="white">
              -- USDT
            </Code>
          </Box>

          {/* input----------2 */}

          <Flex py="16px">
            <Flex
              px="10px"
              align="center"
              maxW="186px"
              w="100%"
              border="1px"
              h="36px"
              borderColor="gray.600"
              borderRadius="8px"
            >
              <Box w="90%" color="white">
                Marke Price
              </Box>
              <Image boxSize="14px" src="/img/swap.svg" />
            </Flex>
            <Spacer />
            <Flex align="center" maxW="200px" h="36px" borderColor="gray.600" borderRadius="8px" border="1px">
              <Input w="90%" border="0px" placeholder="Stop Loss" />
              <Box color="white" pr="10px">
                USDT
              </Box>
            </Flex>
          </Flex>

          {/* end_input-------2 */}

          <Box my="16px" bg="gray.700" borderRadius="8px" p="14px">
            When{' '}
            <Code color="white" bg="none">
              Mark Price
            </Code>{' '}
            reaches{' '}
            <Code color="white" bg="none">
              0.00
            </Code>
            , it will trigger Take Profit Market order to close this position. Estimated PNL will be{' '}
            <Code color="white" bg="none">
              -- USDT
            </Code>
          </Box>

          {/* input-----------3 */}

          <Box color="teal.150" fontWeight="400">
            This setting applies to the entire position. Take-profit and stop-loss automatically cancel after closing
            the position. A market order is triggered when the stop price is reached. The order will be rejected if the
            amount of position exceeds the limit of the Max Market Order Qty.
          </Box>

          <Flex mx="auto" w="95%">
            <Button my="36px" w="100%" h="48px" bg="teal.150" color="white" borderRadius="24px">
              Confirm
            </Button>
          </Flex>
        </Box>

        {/* End_content_modal */}
      </Box>
    </>
  );
};
export default Modal;
