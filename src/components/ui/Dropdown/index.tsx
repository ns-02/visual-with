import React from 'react';
import { DropdownMenu } from 'radix-ui';
import styles from './Dropdown.module.css';

interface DropDownProps {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
}

const Dropdown = (props: DropDownProps) => {
  const { trigger, content } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content align='start' className={styles.container}>
        {content}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
