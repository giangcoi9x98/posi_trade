import React from 'react';
import { Image } from '@chakra-ui/react';

interface SortIconProps {
  name: string;
  value: string | null;
  onChange: (name: string, value: string | null) => void;
}

const SortIcon: React.FC<SortIconProps> = ({ value, onChange, name }) => {
  const handleClickSort = (val: string | null) => {
    onChange(name, val);
  };
  const renderImage = (val: string | null) => {
    if (val === 'desc') {
      return (
        <Image
          onClick={() => handleClickSort('asc')}
          px={'5px'}
          cursor={'pointer'}
          display={'inline-flex'}
          src={'/img/assets/desc.svg'}
        />
      );
    } else if (val === 'asc') {
      return (
        <Image
          onClick={() => handleClickSort(null)}
          px={'5px'}
          cursor={'pointer'}
          display={'inline-flex'}
          src={'/img/assets/asc.svg'}
        />
      );
    }
    return (
      <Image
        onClick={() => handleClickSort('desc')}
        px={'5px'}
        cursor={'pointer'}
        display={'inline-flex'}
        src={'/img/assets/sort.svg'}
      />
    );
  };
  return renderImage(value);
};

export default SortIcon;
