import React, { useState } from 'react';
import { Flex, Button, Box, Text, Center } from '@chakra-ui/react';
import 'index.css';
import InputNumber from 'components/InputNumber';

interface SlipPageProps {
  value: string;
  setValue: (nustringmber: string) => any;
}

const SlipPage: React.FC<SlipPageProps> = ({ value, setValue }) => {
  const [isCustom, setIsCustom] = useState(false);
  return (
    <Flex direction="column" pb={['10px', '10px', '10px', '10px', '10px']}>
      <Text color="white" fontWeight="semibold" pb={['8px', '8px', '8px', '8px', '8px']}>
        Slippage Tolerance{' '}
      </Text>
      <Flex
        justifyContent="space-around"
        justify="center"
        alignItems="center"
        bg="gray.800"
        color="gray.450"
        borderRadius="8px"
        border="1px"
        borderColor="teal.150"
        maxH={['56px', '56px', '56px', '56px', '56px']}
        fontWeight="normal"
        fontStyle="normal"
        fontSize={['12px', '12px', '12px', '12px']}
      >
        <Button
          h="100%"
          variant="tertiary"
          scale="sm"
          onClick={() => {
            setValue('0.1');
            setIsCustom(false);
          }}
          borderRadius="4px"
          color={value === '0.1' && !isCustom ? 'white' : ''}
          bg={value === '0.1' && !isCustom ? 'teal.150' : 'transparent'}
          w="17%"
          className="noneBoxShadowBtn"
          fontSize={['12px', '12px', '12px', '12px']}
        >
          0.1%
        </Button>
        <Box w="1px" bg="gray.500" h="14px" />
        <Button
          h="100%"
          variant="tertiary"
          scale="sm"
          onClick={() => {
            setValue('0.5');
            setIsCustom(false);
          }}
          color={value === '0.5' && !isCustom ? 'white' : ''}
          bg={value === '0.5' && !isCustom ? 'teal.150' : 'transparent'}
          borderRadius="4px"
          w="17%"
          className="noneBoxShadowBtn"
          fontSize={['12px', '12px', '12px', '12px']}
        >
          0.5%
        </Button>
        <Box w="1px" bg="gray.500" h="14px" />

        <Button
          h="100%"
          variant="tertiary"
          scale="sm"
          onClick={() => {
            setValue('1');
            setIsCustom(false);
          }}
          color={value === '1' && !isCustom ? 'white' : ''}
          bg={value === '1' && !isCustom ? 'teal.150' : 'transparent'}
          borderRadius="4px"
          w="17%"
          className="noneBoxShadowBtn"
          fontSize={['12px', '12px', '12px', '12px']}
        >
          1%
        </Button>
        <Box w="1px" bg="gray.500" h="14px" />
        <Center
          h="100%"
          w="30%"
          bg="gray.800"
          // onClick={handlerCustom}
          _active={{}}
          _hover={{}}
          color={isCustom ? 'white' : ''}
          borderRadius="4px"
          fontSize={['12px', '12px', '12px', '12px']}
        >
          Custom
        </Center>
        <Box w="19%" height="100%" cursor="pointer">
          <InputNumber value={value} setValue={setValue} fontSize="12px" disableBorder tag={'%'} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SlipPage;
