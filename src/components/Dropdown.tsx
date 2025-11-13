import React from "react";
import { DropdownMenu } from "radix-ui";
import Button from "./ui/Button";
import styles from './Dropdown.module.css';

interface Props {
  text?: string;
  children?: React.ReactNode;
}

const Dropdown = (props: Props) => {
  const { text, children } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button text={text} shape="square" />
	    </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start" className={styles.container}>
  {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown;