import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Text, Center } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

interface PropsDropdown {
  w?: string;
  h?: string;
  mb?: string;
  option?: any[];
  setOption?: (option: string) => void;
  optionSelected?: string;
  maxW?: string;
  isDisable?: boolean;
  bg?: string;
  color?: string;
}
const Dropdown: React.FC<PropsDropdown> = ({
  h,
  mb,
  option,
  setOption,
  optionSelected,
  maxW,
  bg = 'gray.700',
  color = 'gray.500',
}) => (
  <Menu>
    <MenuButton
      as={Button}
      h={h}
      mb={mb}
      p="0"
      bg={bg}
      color={color}
      _active={{ bg: `${bg}` }}
      _hover={{ bg: `${bg}` }}
      className="noneBoxShadowBtn"
      pl="4px"
    >
      <Center>
        <Text fontSize="12px" mr="4px">
          {optionSelected}
        </Text>
        <TriangleDownIcon color="gray.50" w="8px" h="8px" />
      </Center>
    </MenuButton>
    <MenuList zIndex={2} bg="gray.700" border="none" color="gray.500" _active={{ bg: 'none' }} minW="60px" maxW={maxW}>
      {option?.map((e, index) => (
        <MenuItem
          zIndex={999}
          key={e}
          p="0"
          m="0"
          bg="gray.700"
          _active={{ bg: 'none' }}
          _hover={{ bg: 'gray.600' }}
          pl="10px"
          _focus={{
            bg: 'gray.700',
          }}
          onClick={() => setOption && setOption(option[index])}
        >
          <Center>{e}</Center>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default Dropdown;
