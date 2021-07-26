import React from 'react';
import { Flex, Button, Box } from '@chakra-ui/react';
import 'index.css';

interface ProgressProps {
  value: number;
  setValue: (number: number) => any;
}

const Progress: React.FC<ProgressProps> = ({ value, setValue }) => (
  <Box p={['3px', '3px', '3px', '3px', '3px', '10px']} bg="gray.700" color="white" borderRadius="24px">
    <Flex justifyContent="space-around">
      <Button
        px={['3px', '3px', '3px', '3px', '3px', '3px']}
        variant="tertiary"
        scale="sm"
        onClick={() => setValue(10)}
        borderRadius="12px"
        fontSize="16px"
        _active={{
          background: 'gray.600',
          boxShadow: 'none',
        }}
        bg={value === 10 ? 'gray.600' : 'transparent'}
        w="20%"
        className="noneBoxShadowBtn"
      >
        10%
      </Button>
      <Button
        px={['3px', '3px', '3px', '3px', '3px', '3px']}
        variant="tertiary"
        scale="sm"
        onClick={() => setValue(20)}
        bg={value === 20 ? 'gray.600' : 'transparent'}
        borderRadius="12px"
        fontSize="16px"
        _active={{
          background: 'gray.600',
        }}
        w="20%"
        className="noneBoxShadowBtn"
      >
        20%
      </Button>
      <Button
        px={['3px', '3px', '3px', '3px', '3px', '3px']}
        variant="tertiary"
        scale="sm"
        onClick={() => {
          setValue(50);
        }}
        bg={value === 50 ? 'gray.600' : 'transparent'}
        borderRadius="12px"
        fontSize="16px"
        _active={{
          background: 'gray.600',
        }}
        w="20%"
        className="noneBoxShadowBtn"
      >
        50%
      </Button>
      <Button
        px={['3px', '3px', '3px', '3px', '3px', '3px']}
        variant="tertiary"
        scale="sm"
        onClick={() => {
          setValue(70);
        }}
        bg={value === 70 ? 'gray.600' : 'transparent'}
        borderRadius="12px"
        fontSize="16px"
        _active={{
          background: 'gray.600',
        }}
        w="20%"
        className="noneBoxShadowBtn"
      >
        70%
      </Button>{' '}
      <Button
        px={['3px', '3px', '3px', '3px', '3px', '3px']}
        variant="tertiary"
        scale="sm"
        onClick={() => {
          setValue(100);
        }}
        bg={value === 100 ? 'gray.600' : 'transparent'}
        borderRadius="12px"
        fontSize="16px"
        _active={{
          background: 'gray.600',
        }}
        w="20%"
        className="noneBoxShadowBtn"
      >
        100%
      </Button>{' '}
    </Flex>
  </Box>
);

export default Progress;
