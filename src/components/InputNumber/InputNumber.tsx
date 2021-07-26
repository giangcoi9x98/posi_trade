import { Text, NumberInput, NumberInputField, Flex } from '@chakra-ui/react';
import Dropdown from 'components/Dropdown';
import { NUMBER_REGEX } from 'configs/constants';
import React from 'react';

interface InputNumberProps {
  value: string;
  setValue: (value: string) => void;
  isLast?: any;
  optionSelected?: string;
  option?: string[];
  setOption?: (option: string) => void;
  placeholder?: string;
  maxW?: string;
  disableBorder?: boolean;
  fontSize?: any;
  tag?: string;
  isDisable?: boolean;
  maxH?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  setValue,
  isLast,
  option,
  optionSelected,
  setOption,
  placeholder,
  maxW,
  disableBorder,
  fontSize,
  tag,
  isDisable = false,
  maxH = '24px',
}) => {
  const lastValue = '1106';
  const handleOnKeyDown = (e: any) => {
    if (e.key === 'e' || e.key === '-' || e.key === '+' || (e.key === '.' && e.target.defaultValue.includes('.'))) {
      e.preventDefault();
      return false;
    }
    return true;
  };
  return (
    <NumberInput
      isDisabled={isDisable}
      id="input-number-container-stake"
      onChange={valueString => setValue(valueString)}
      value={value || ''}
      // variant="unstyled"
      zIndex="inherit"
      flexDirection="row"
      alignItems="center"
      w={['100%', '100%', '100%%', '100%', '100%', '100%']}
      justifyContent="space-between"
      pr="0px"
      bg="gray.800"
      sx={{
        borderColor: 'gray.350',
      }}
      border={disableBorder ? '0px' : '1px'}
      borderRadius={['8px', '8px', '8px', '8px', '8px']}
      p={['4px', '4px', '4px', '4px', '4px']}
      focusBorderColor="none"
      d="flex"
      flexDir="row"
      cursor="pointer"
    >
      <NumberInputField
        pattern={NUMBER_REGEX}
        onKeyPress={handleOnKeyDown}
        borderWidth={0}
        color="gray.400"
        maxLength={18}
        pr="0px"
        className="input-number"
        placeholder={placeholder || '0.0'}
        fontSize={fontSize}
        fontWeight={600}
        maxH={maxH}
        paddingLeft="0px"
      />
      <Text
        color="teal.150"
        mr={['12px', '12px', '12px', '12px', '12px']}
        cursor="pointer"
        d={isLast ? 'block' : 'none'}
        onClick={() => setValue(lastValue)}
      >
        last
      </Text>
      <Text d={tag ? 'block' : 'none'} mr={['4px', '4px', '4px', '8px', '8px']}>
        {tag}
      </Text>
      <Flex d={option ? 'block' : 'none'} pointerEvents={isDisable ? 'none' : 'all'} cursor="pointer">
        <Dropdown
          w="32px"
          h="20px"
          option={option}
          optionSelected={optionSelected}
          setOption={opt => setOption && setOption(opt)}
          maxW={maxW}
        />
      </Flex>
    </NumberInput>
  );
};

export default InputNumber;
