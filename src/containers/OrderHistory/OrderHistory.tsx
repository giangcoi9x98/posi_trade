import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  useMediaQuery,
  Box,
  Td,
} from '@chakra-ui/react';
import { TabPosition } from './components/TabPosition';
import TabOrderHistory from './components/TabOrderHistory';
import Dropdown from '../../components/Dropdown';
import OpenOrder from './components/OpenOrder';
import TradeHistory from './components/TradeHistory';
import {
  ContentOpenOrder,
  ContentTabOrderHistory,
  ContentTradeHistory,
  ContentTabPosition,
  TitleOpenOrder,
  TitleTabOrderHistory,
  TitleListTabOrderHistory,
  TitleTabPosition,
  TitleTradeHistory,
} from '../../configs/constants/trading';

const OrderHistory: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState('');
  const [isSmallThan768] = useMediaQuery('(max-width: 1500px ) and (min-width: 0px )');
  const option = ['All', 'Limit ', 'Stop Limit'];

  return (
    <Tabs variant="none" bg="gray.800" overflowX={isSmallThan768 ? 'scroll' : 'inherit'} borderRadius="8px" w="100%">
      <TabList color="gray.500">
        {TitleListTabOrderHistory?.map(e => (
          <Tab
            fontSize={['14px', '14px', '14px']}
            fontWeight="semibold"
            _active={{ bg: 'transparent' }}
            className="noneBoxShadowBtn"
            key={e.id}
          >
            {e.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels w="100%">
        <TabPanel overflow="scroll" className="style-4">
          <Table minW="1300px">
            <Thead bg="gray.150">
              <Tr color="gray.250">
                {TitleTabPosition?.map(e => (
                  <Td
                    px="12px"
                    py="0px"
                    h="31px"
                    border="none"
                    fontSize={['12px', '12px', '12px', '12px']}
                    fontWeight="400"
                    color="gray.400"
                    key={e.id}
                  >
                    {' '}
                    {e.title}{' '}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <TabPosition data={ContentTabPosition} />
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table>
            <Thead bg="gray.150">
              <Tr color="gray.250">
                {TitleOpenOrder?.map(e => (
                  <Th
                    border="none"
                    key={e.id}
                    fontSize={['12px', '12px', '12px', '12px']}
                    fontWeight="400"
                    color="gray.400"
                  >
                    {' '}
                    {e.title}{' '}
                  </Th>
                ))}
                <Th>
                  <Box>
                    <Dropdown
                      optionSelected={optionSelected}
                      option={option}
                      setOption={opt => setOptionSelected(opt)}
                    />
                  </Box>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <OpenOrder data={ContentOpenOrder} />
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table>
            <Thead bg="gray.150">
              <Tr>
                {TitleTabOrderHistory?.map(e => (
                  <Th
                    border="none"
                    key={e.id}
                    fontSize={['12px', '12px', '12px', '12px']}
                    fontWeight="400"
                    color="gray.400"
                  >
                    {' '}
                    {e.title}{' '}
                  </Th>
                ))}
                <Th>
                  <Box>
                    <Dropdown
                      optionSelected={optionSelected}
                      option={option}
                      setOption={opt => setOptionSelected(opt)}
                    />
                  </Box>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <TabOrderHistory data={ContentTabOrderHistory} />
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table w="100%">
            <Thead bg="gray.150" w="100%">
              <Tr>
                {TitleTradeHistory?.map(e => (
                  <Td
                    h="31px"
                    px="12px"
                    py="0px"
                    border="none"
                    key={e.id}
                    fontSize={['12px', '12px', '12px', '12px']}
                    fontWeight="400"
                    color="gray.400"
                  >
                    {' '}
                    {e.title}{' '}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody w="100%">
              <TradeHistory data={ContentTradeHistory} />
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default OrderHistory;
