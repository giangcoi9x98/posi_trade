import React from 'react';
import { Checkbox, Icon, Text } from '@chakra-ui/react';
import 'index.css';

interface PropsCheckBox {
  title: string;
  checked: boolean;
  setChecked: (isChecked: boolean) => void;
  isDisable?: boolean;
}
function CustomIcon(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isIndeterminate, isChecked, ...rest } = props;

  return (
    <Icon viewBox="0 0 24 24" {...rest}>
      <path fill="currentColor" />
    </Icon>
  );
}
const CheckBox: React.FC<PropsCheckBox> = ({ title, checked, setChecked, isDisable = false }) => {
  return (
    <Checkbox
      cursor="pointer"
      className="checkbox_custom"
      isChecked={checked}
      icon={<CustomIcon isIndeterminate isChecked />}
      onChange={() => setChecked(!checked)}
      borderColor={checked ? 'teal.150' : 'gray.350'}
      isIndeterminate={checked}
      _focus={{
        border: '0px',
        borderColor: 'teal.150',
      }}
      bg="transparent"
      isDisabled={isDisable}
      opacity={isDisable ? 0.5 : 1}
      colorScheme="teal.150"
      w="fit-content"
    >
      <Text color="gray.300" fontWeight="medium" fontSize="12px">
        {title}
      </Text>
    </Checkbox>
  );
};

export default CheckBox;
