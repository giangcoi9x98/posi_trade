import { extendTheme } from '@chakra-ui/react';

const themeContext = extendTheme({
  colors: {
    teal: {
      150: '#1AC486',
    },
    gray: {
      150: '#5D6776',
      250: '#A0AEC0',
      350: '#74849D',
      450: '#7688A2',
    },
    cyan: {
      150: '#4299E1',
      350: '#74849D',
    },
    colorsText: {
      100: '#27DC8A',
      50: '#C5D2E2',
      0: '#616874',
      150: '#CBD5E0',
    },
    bgCountdown: {
      start: '#27DC8A',
      end: '#11BF97',
    },
    green: {
      150: '#1AC486',
    },
  },
});

export default themeContext;
