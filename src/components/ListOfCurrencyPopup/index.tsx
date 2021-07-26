import React, { useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Image,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SortIcon from '../SortIcon';

const ListOfCurrencyPopup: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortState, setSortState] = useState<{ name: string; value: string | null }>({ name: '', value: null });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChangeSort = (name: string, value: string | null) => {
    setSortState({
      name,
      value,
    });
  };

  return (
    <Flex>
      <Popover placement="bottom-start" onOpen={handleOpen} isOpen={isOpen} onClose={handleClose}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent
          w={['350px', '350px', '350px', '500px', '600px', '600px']}
          bg={'gray.700'}
          borderColor={'gray.700'}
        >
          <PopoverArrow bg={'gray.700'} />
          <PopoverBody p={'16px'}>
            <Flex flexDirection={'column'}>
              <Flex color={'white'}>USDT Futures</Flex>
              <InputGroup mt={'8px'}>
                <Input
                  borderRadius={'24px'}
                  borderColor={'#74849D'}
                  _focus={{ borderColor: '#74849D' }}
                  w={'100%'}
                  fontSize={'13px'}
                  color={'gray.500'}
                />
                <InputRightElement>
                  <SearchIcon color="gray.500" />
                </InputRightElement>
              </InputGroup>
              <Flex mt={'16px'}>
                <Flex
                  cursor={'pointer'}
                  fontSize={'13px'}
                  width={'fit-content'}
                  px={'12px'}
                  py={'3px'}
                  borderRadius={'16px'}
                  bg={'transparent'}
                  color={'gray.500'}
                >
                  Favorite
                </Flex>
                <Flex
                  ml={'16px'}
                  width={'fit-content'}
                  px={'12px'}
                  py={'3px'}
                  borderRadius={'16px'}
                  bg={'gray.500'}
                  color={'white'}
                  cursor={'pointer'}
                  fontSize={'13px'}
                >
                  All
                </Flex>
              </Flex>
              <Table id={'table-currency'} mt={'16px'} variant="simple">
                <Thead>
                  <Tr>
                    <Th w={'40%'}>
                      Symbols
                      <SortIcon
                        onChange={handleChangeSort}
                        name={'symbols'}
                        value={sortState?.name === 'symbols' ? sortState?.value : null}
                      />
                    </Th>
                    <Th>
                      Last Price
                      <SortIcon
                        onChange={handleChangeSort}
                        name={'price'}
                        value={sortState?.name === 'price' ? sortState?.value : null}
                      />
                    </Th>
                    <Th>
                      Vol
                      <SortIcon
                        onChange={handleChangeSort}
                        name={'vol'}
                        value={sortState?.name === 'vol' ? sortState?.value : null}
                      />
                      <Image cursor={'pointer'} display={'inline-flex'} src={'/img/assets/swap.svg'} />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>BNB/BUSD</Td>
                    <Td>
                      <Text as={'span'} color={'red.400'}>
                        32,098.00
                      </Text>
                    </Td>
                    <Td>32,098.00</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB/BUSD</Td>
                    <Td>
                      <Text as={'span'} color={'red.400'}>
                        32,098.00
                      </Text>
                    </Td>
                    <Td>32,098.00</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB/BUSD</Td>
                    <Td>
                      <Text as={'span'} color={'red.400'}>
                        32,098.00
                      </Text>
                    </Td>
                    <Td>32,098.00</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB/BUSD</Td>
                    <Td>
                      <Text as={'span'} color={'red.400'}>
                        32,098.00
                      </Text>
                    </Td>
                    <Td>32,098.00</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default ListOfCurrencyPopup;
