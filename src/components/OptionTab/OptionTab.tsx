import React from 'react';
import { Flex, Button, Box } from '@chakra-ui/react';
import 'index.css';

interface OptionTabProps {
  selectedOption: string;
  setSelectedOption: (selectedOption: string) => any;
  option?: string[];
}

const OptionTab: React.FC<OptionTabProps> = ({ selectedOption, setSelectedOption, option }) => (
  <Box
    px={['10px', '10px', '10px', '10px', '10px', '10px']}
    bg="gray.700"
    color="white"
    borderRadius="8px"
    py={['4px', '4px', '4px', '4px', '4px', '4px']}
  >
    <Flex justifyContent="space-around">
      {option?.map((e, index) => (
        <Button
          keys={index}
          px={['2px', '2px', '2px', '2px', '2px', '2px']}
          variant="tertiary"
          scale="sm"
          onClick={() => setSelectedOption(e)}
          borderRadius="8px"
          fontSize="16px"
          _active={{
            background: 'gray.600',
            boxShadow: 'none',
          }}
          bg={selectedOption === e ? 'gray.600' : 'transparent'}
          w={`${100 / option?.length}%`}
          className="noneBoxShadowBtn"
        >
          {e}
        </Button>
      ))}
    </Flex>
  </Box>
);

export default OptionTab;
