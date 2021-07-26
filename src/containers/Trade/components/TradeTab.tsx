import React from 'react';
import { Flex, Button, Box } from '@chakra-ui/react';
import 'index.css';

interface TradeTopProps {
  selectedOption: string;
  setSelectedOption: (selectedOption: string) => any;
  option?: string[];
  bg?: string;
  radius?: string;
  maxH?: string;
  fontSize?: string;
}

const TradeTop: React.FC<TradeTopProps> = ({
  selectedOption,
  setSelectedOption,
  option,
  bg = 'gray.800',
  radius = '24px',
  maxH,
  fontSize = '16px',
}) => {
  return (
    <Box
      color="white"
      borderRadius="8px"
      bg={bg}
      w="100%"
      mb={['8px', '8px', '8px', '8px', '8px']}
      p={['4px', '4px', '4px', '4px', '4px']}
    >
      <Flex justifyContent="space-between">
        {option?.map(e => (
          <Button
            key={e}
            maxH={maxH}
            px={['2px', '2px', '2px', '2px', '2px', '2px']}
            variant="tertiary"
            scale="sm"
            onClick={() => setSelectedOption(e)}
            borderRadius={radius}
            fontSize={fontSize}
            _active={{
              background: 'gray.600',
              boxShadow: 'none',
            }}
            color={selectedOption === e ? 'white' : '#3C4654'}
            bg={selectedOption === e ? 'gray.600' : 'transparent'}
            w={`${95 / option?.length}%`}
            className="noneBoxShadowBtn"
          >
            {e}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default TradeTop;
