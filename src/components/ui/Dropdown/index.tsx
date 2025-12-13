import React from 'react';
import { DropdownMenu } from 'radix-ui';
import styles from './Dropdown.module.css';

type Align = 'center' | 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';

interface DropDownProps {
  align?: Align;
  side?: Side;
  trigger?: React.ReactNode;
  items?: React.ReactNode;
}

const Dropdown = (props: DropDownProps) => {
  const { align = 'start', side, trigger, items } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        side={side}
        align={align}
        className={styles.container}
      >
        {items}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
