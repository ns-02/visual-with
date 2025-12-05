import React from 'react';
import { DropdownMenu } from 'radix-ui';
import styles from './Dropdown.module.css';

interface DropDownProps {
  trigger?: React.ReactNode;
  items?: React.ReactNode;
}

const Dropdown = (props: DropDownProps) => {
  const { trigger, items } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content align='start' className={styles.container}>
        {items}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
