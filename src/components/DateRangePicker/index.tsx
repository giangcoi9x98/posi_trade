import React, { useState } from 'react';
import { Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
// @ts-ignore
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import moment from 'moment';

export interface DateRangeProps {
  start: moment.Moment | null;
  end: moment.Moment | null;
}

interface DateRangePickerComponentProps {
  value: DateRangeProps | null;
  onChange: (e: DateRangeProps | null) => void;
}

const DateRangePickerComponent: React.FC<DateRangePickerComponentProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeDate = (e: DateRangeProps) => {
    onChange(e);
    handleClose();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Flex>
      <Popover placement="auto" onOpen={handleOpen} isOpen={isOpen} onClose={handleClose}>
        <PopoverTrigger>
          <Flex cursor={'pointer'} bg={'transparent'} color={'white'} fontSize={'13px'}>
            {value?.start ? moment(value?.start).format('YY/MM/DD') : 'YY/MM/DD'} -{' '}
            {value?.end ? moment(value?.end).format('YY/MM/DD') : 'YY/MM/DD'}
          </Flex>
        </PopoverTrigger>
        <PopoverContent bg={'gray.700'} borderColor={'gray.700'}>
          <PopoverArrow bg={'gray.700'} />
          <PopoverBody p={'0px'}>
            <DateRangePicker onSelect={handleChangeDate} value={value} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default DateRangePickerComponent;
