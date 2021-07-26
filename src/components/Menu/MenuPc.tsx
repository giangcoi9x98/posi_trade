import { Box, HStack, Link } from '@chakra-ui/react';

export const MenuPc = () => {
  return (
    <>
      <HStack
        display={['none', 'none', 'none', 'none', 'flex']}
        fontSize="16px"
        color="gray.500"
        mt="2px"
        mr="20px"
        alignItems="center"
        spacing={['35px', '35px', '20px', '12px', '30px', '60px', '70px', '80px']}
      >
        <Box fontWeight={600} cursor="pointer" pb="5px" pt="7px" className="scroll-to-top">
          <Link href="https://position.exchange/" isExternal _hover={{ borderColor: 'none' }}>
            Home
          </Link>
        </Box>
        <Box
          cursor="pointer"
          pb="5px"
          fontWeight={500}
          pt="9px"
          borderBottomWidth="2px"
          borderBottomColor="transparent"
        >
          Trading
        </Box>
        <Box cursor="pointer" fontWeight={500} pb="5px" pt="9px">
          Exchange
        </Box>
        <Box
          cursor="pointer"
          pb="5px"
          pt="9px"
          fontWeight={500}
          borderBottomWidth="2px"
          borderBottomColor="transparent"
        >
          Pools
        </Box>
        <Box cursor="pointer" pt="9px" fontWeight={500} pb="5px">
          Farming
        </Box>
        <Box
          cursor="pointer"
          fontWeight={500}
          pb="5px"
          pt="9px"
          borderBottomWidth="2px"
          borderBottomColor="transparent"
        >
          NFTs
        </Box>
        <Box
          cursor="pointer"
          fontWeight={500}
          pt="9px"
          pb="5px"
          borderBottomWidth="2px"
          borderBottomColor="transparent"
        >
          Docs
        </Box>

        <Box
          cursor="pointer"
          fontWeight={500}
          pt="9px"
          pb="5px"
          borderBottomWidth="2px"
          borderBottomColor="transparent"
          color="teal.150"
        >
          <Link
            href="https://position.exchange/whitepaper.pdf"
            _hover={{
              border: 'none',
            }}
            isExternal
          >
            Whitepaper
          </Link>
        </Box>
      </HStack>
    </>
  );
};
