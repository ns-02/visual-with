import React, { Dispatch, SetStateAction } from 'react';
import { DropdownMenu } from "radix-ui";
import Button from "./ui/Button";
import styles from './Dropdown.module.css';

interface Props {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const Dropdown = (props: Props) => {
  const { open, onOpenChange, children } = props;

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange} >
      <DropdownMenu.Content align="start" className={styles.container}>
  {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown;