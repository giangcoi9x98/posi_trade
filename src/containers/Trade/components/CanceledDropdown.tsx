import { Flex } from '@chakra-ui/react';
import Dropdown from 'components/Dropdown';
import React from 'react';

interface CanceledDropdowmProps {
  setOption: (option: string) => void;
  optionSelected: string;
}

const CanceledDropdowm: React.FC<CanceledDropdowmProps> = ({ setOption, optionSelected }) => {
  const option = ['Good till cancelled', 'Immediate or Cancel', 'Fill or Kill'];
  return (
    <Flex>
      <Dropdown
        optionSelected={optionSelected}
        option={option}
        setOption={val => setOption(val)}
        bg="gray.800"
        color="colorsText.150"
      />
    </Flex>
  );
};

export default CanceledDropdowm;
