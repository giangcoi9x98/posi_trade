import React, { useState } from 'react';
// @ts-ignore
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Tab,
  TabList,
  Tabs,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import './App.css';
import Trade from 'containers/Trade';
import ContractDetail from '../../components/ContractDetail';
import AssetsComponent from '../../components/AssetsComponent';
import TitleChart from '../../components/TitleChart';
import Header from '../Header/Header';
import RecentOrders from '../RecentOrders/RecentOrders';
import OrderHistory from '../OrderHistory/OrderHistory';
import OrderBook from '../OrderBook/OrderBook';
import 'react-virtualized/styles.css';

function App() {
  const [isSmallThan768] = useMediaQuery('(max-width: 768px ) and (min-width: 0px )');
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChangeTab = (val: number) => {
    setCurrentTab(val);
  };

  const renderDisplayPropOfTab = (indexOfTab: number) => {
    const isTabSelected = currentTab === indexOfTab ? 'flex' : 'none';
    return isSmallThan768 ? isTabSelected : 'flex';
  };
  console.log('render');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w={'100%'} mb={isSmallThan768 ? '66px' : '0px'} flexDirection={'column'} bg="gray.900" pb="26px">
      <Flex h="90px">
        <Header />
      </Flex>
      <Flex w={'95%'} mx={'auto'} pt="20px" bg="gray.900">
        <Flex
          w={['100%', '100%', '70%', '75%', '80%', '80%']}
          bg={'gray.900'}
          flexDirection={'column'}
          alignItems={'stretch'}
        >
          <Flex
            w={'100%'}
            mb="20px"
            h={'fit-content'}
            flexDirection={['column', 'column', 'column', 'column', 'row', 'row']}
          >
            {isSmallThan768 && (
              <Flex p={'16px'} bg={'gray.800'}>
                <TitleChart />
              </Flex>
            )}
            <Tabs
              mt={'-26px'}
              bg={'gray.800'}
              color={'gray.500'}
              display={isSmallThan768 ? 'flex' : 'none'}
              onChange={handleChangeTab}
            >
              <TabList borderWidth={'0px'}>
                <Tab borderWidth={'0px'} fontSize={'14px'} py={'8px'} px={'16px'}>
                  Chart
                </Tab>
                <Tab borderWidth={'0px'} fontSize={'14px'} py={'8px'} px={'16px'}>
                  <OrderBook sell="39266.00" buy="39266.00" />
                </Tab>
                <Tab borderWidth={'0px'} fontSize={'14px'} py={'8px'} px={'16px'}>
                  <RecentOrders />
                </Tab>
              </TabList>
            </Tabs>

            <Flex
              w={['100%', '100%', '100%', '100%', '75%', '75%']}
              bg={'gray.800'}
              // h={'900px'}
              borderRadius={'8px'}
              display={renderDisplayPropOfTab(0) || 'flex'}
              flexDirection={'column'}
              p={'16px'}
            >
              {!isSmallThan768 && <TitleChart />}
              <TradingViewWidget autosize symbol={'BINANCE:BNBBUSD'} theme={Themes.DARK} />
            </Flex>
            <Flex
              w={['100%', '100%', '100%', '100%', '25%', '25%']}
              bg={'gray.900'}
              flexDirection={['column', 'column', 'row', 'row', 'column', 'column']}
              alignItems={'stretch'}
              ml="10px"
            >
              <Flex
                w={'100%'}
                display={renderDisplayPropOfTab(1) || 'flex'}
                h={['fit-content', 'fit-content', 'fit-content', 'fit-content', '100%', '100%']}
                bg={'gray.900'}
                mb="10px"
                borderRadius="8px"
              >
                <OrderBook buy="39266.00" sell="39266.00" />
              </Flex>
              <Flex
                w={'100%'}
                display={renderDisplayPropOfTab(2) || 'flex'}
                h={['fit-content', 'fit-content', 'fit-content', 'fit-content', '40%', '40%']}
                bg={'gray.900'}
                borderRadius="8px"
              >
                <RecentOrders />
              </Flex>
            </Flex>
          </Flex>
          <Flex w={'100%'} bg={'red.100'} borderRadius="10px">
            <OrderHistory />
          </Flex>
        </Flex>
        <Flex
          w={['30%', '30%', '30%', '25%', '20%', '20%']}
          display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          bg={'gray.900'}
          px={'8px'}
          flexDirection={'column'}
        >
          <Trade />
          <AssetsComponent />
          <ContractDetail />
        </Flex>
      </Flex>
      <Flex
        h={'66px'}
        bg={'gray.700'}
        w={'100%'}
        position={'fixed'}
        bottom={'0px'}
        justifyContent={'space-between'}
        px={'32px'}
        py={'16px'}
        display={isSmallThan768 ? 'flex' : 'none'}
      >
        <Button w={'48%'} className={'primary'} onClick={onOpen}>
          Buy
        </Button>
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent w="100%">
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button w={'48%'} className={'danger'}>
          Sell
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
