import { Box, Center, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface SliderProps {
  value: number;
  setValue: (value: number) => void;
}

const CustomSlider: React.FC<SliderProps> = ({ value, setValue }) => {
  const CustomLabel: React.FC = () => {
    return <Box borderRadius="20px">{value}%</Box>;
  };
  return (
    <Box w="96%" pt="24px" position="relative">
      <Slider position="relative" aria-label="slider-ex-1" defaultValue={value} onChange={e => setValue(e)}>
        <SliderTrack bg="gray.700">
          <SliderFilledTrack bg="teal.150" />
        </SliderTrack>
        <Tooltip label={<CustomLabel />} placement="top">
          <SliderThumb bg="green.150" border="2px" borderColor="white" zIndex="2" boxSize={4} />
        </Tooltip>

        <Flex position="relative" w="100%" ml="2px" mt="-4px">
          <Center
            borderColor="white"
            position="absolute"
            w="12px"
            ml={['-2%']}
            mt={['-0.5%']}
            h="12px"
            borderRadius="50%"
            zIndex="1"
            bg={value > 0 ? 'teal.150' : 'gray.500'}
          >
            <Box w="8px" h="8px" borderRadius="50%" bg={value > 0 ? 'white' : 'gray.500'} />
          </Center>
          <Center
            borderColor="white"
            position="absolute"
            w="12px"
            ml={['23%']}
            mt={['-0.5%']}
            h="12px"
            borderRadius="50%"
            zIndex="1"
            bg={value > 25 ? 'teal.150' : 'gray.500'}
          >
            <Box w="8px" h="8px" borderRadius="50%" bg={value > 25 ? 'white' : 'gray.500'} />
          </Center>
          <Center
            borderColor="white"
            position="absolute"
            w="12px"
            ml={['48%']}
            mt={['-0.5%']}
            h="12px"
            borderRadius="50%"
            zIndex="1"
            bg={value > 50 ? 'teal.150' : 'gray.500'}
          >
            <Box w="8px" h="8px" borderRadius="50%" bg={value > 50 ? 'white' : 'gray.500'} />
          </Center>
          <Center
            borderColor="white"
            position="absolute"
            w="12px"
            ml={['73%']}
            mt={['-0.5%']}
            h="12px"
            borderRadius="50%"
            zIndex="1"
            bg={value > 75 ? 'teal.150' : 'gray.500'}
          >
            <Box w="8px" h="8px" borderRadius="50%" bg={value > 75 ? 'white' : 'gray.500'} />
          </Center>
          <Center
            borderColor="white"
            position="absolute"
            w="12px"
            ml={['98%']}
            mt={['-0.5']}
            h="12px"
            borderRadius="50%"
            zIndex="1"
            bg="gray.500"
          >
            <Box w="8px" h="8px" borderRadius="50%" bg={value > 99 ? 'white' : 'gray.500'} />
          </Center>
        </Flex>
      </Slider>
    </Box>
  );
};

export default CustomSlider;
