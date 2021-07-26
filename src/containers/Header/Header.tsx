import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { MenuPc } from 'components/Menu/MenuPc';
import { NavigationMobi } from 'components/Menu/NavigationMobi';
import React from 'react';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="gray.800"
      color="white"
      // pt={["8px", "6px", "2px", "0px", "14px", "20px", "18px"]}
      // pb={["12px", "12px", "12px", "12px", "22px", "22px"]}
      position="fixed"
      w="100%"
      h={['90px', '90px', '90px', '90px', '90px', '90px']}
      alignItems="center"
      zIndex="999"
    >
      <Flex maxWidth="100%" h={['90px', '90px', '90px', '90px', '90px', '90px']} px="20px" alignItems="center">
        <Flex w="100%" h={['90px', '90px', '90px', '90px', '90px', '90px']} alignItems="center">
          <Flex top="1rem" left="1rem" align="center" alignItems="center">
            <Box
              my={{ base: '20px', md: '20px', lg: '20px' }}
              aria-label="Open Menu"
              size="md"
              mr={2}
              onClick={onOpen}
              display={['flex', 'flex', 'flex', 'flex', 'none']}
            >
              <Image src="img/HambergerIcon.svg" alt="Segun Adebayo" />
            </Box>
          </Flex>
          <Flex align="center">
            <Image src="/img/logo-position.svg" alt="Logo Position" maxHeight="48px" />
            <Image
              pl="12px"
              display={['block', 'block', 'block', 'block']}
              maxHeight="48px"
              src="/img/Text-Logo.svg"
              alt="Logo Position"
            />
          </Flex>
          <Spacer h="50px" />
          <MenuPc />
          <Flex
            color="white"
            align="center"
            // mx={["1rem", "1rem", "1rem", "1rem", "2rem", "1rem"]}
          >
            <Button borderRadius="24px" bg="teal.150">
              Connect to wallet
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent css={{ width: '250px !important' }} bg="gray.700">
            <DrawerHeader color="white" px="12" py="7">
              Menu
            </DrawerHeader>
            <NavigationMobi />
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
