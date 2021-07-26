import { DrawerBody, Box, Link } from '@chakra-ui/react';

export const NavigationMobi = () => {
  return (
    <>
      <DrawerBody color="gray.500" px="0">
        <Box
          borderColor="teal.150"
          color="teal.150"
          px="45px"
          borderLeft="4px"
          fontWeight={600}
          _hover={{
            background: 'button.400',
          }}
          py="15px"
          fontSize="16px"
        >
          Promotions
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          <Link href="https://position.exchange/" isExternal _hover={{ borderColor: 'none' }}>
            Home
          </Link>
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          Trading
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          Exchange
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          Pools
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          Farming
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          NFTs
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          Docs
        </Box>
        <Box
          w="100%"
          py="15px"
          fontWeight={500}
          px="12"
          _hover={{
            background: 'gray.600',
          }}
        >
          <Link
            color="teal.150"
            href="https://position.exchange/whitepaper.pdf"
            _hover={{
              border: 'none',
            }}
            isExternal
          >
            Whitepaper
          </Link>
        </Box>
      </DrawerBody>
    </>
  );
};
