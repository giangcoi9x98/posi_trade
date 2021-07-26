import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

interface PropTradeFootter {
  maxBy: {
    buy: string;
    sell: string;
    currency?: string;
  };
  cost: {
    buy: string;
    sell: string;
    currency?: string;
  };
  status?: string;
}

const TradeFooter: React.FC<PropTradeFootter> = ({ maxBy, cost, status }) => {
  return (
    <Box fontSize={['12px', '12px', '12px', '12px']} pt={['4px', '4px', '4px', '4px', '4px']}>
      <SimpleGrid columns={4} fontWeight="medium" color="gray.500" spacing={[6, 6, 6, 6, 6]}>
        <Box> Max {status === 'Open' ? 'buy' : ''} </Box>
        <Box textAlign="end">
          {' '}
          {maxBy.buy}
          {maxBy.currency}{' '}
        </Box>
        <Box> Max {status === 'Open' ? 'buy' : ''} </Box>
        <Box textAlign="end">
          {' '}
          {maxBy.sell} {maxBy.currency}{' '}
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={4}
        fontWeight="medium"
        color="gray.500"
        display={status === 'Open' ? 'grid' : 'none'}
        spacing={[6, 6, 6, 6, 6]}
      >
        <Box> Cost </Box>
        <Box textAlign="end">
          {' '}
          {cost.buy}
          {cost.currency}{' '}
        </Box>
        <Box> Cost </Box>
        <Box textAlign="end">
          {' '}
          {cost.sell}
          {cost.currency}{' '}
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TradeFooter;
