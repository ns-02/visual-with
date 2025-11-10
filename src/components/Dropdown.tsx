import React from "react";
import { DropdownMenu } from "radix-ui";
import Button from "./ui/Button";
import styles from './Dropdown.module.css';
import Item from "./ui/Item";

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
        <DropdownMenu.Item onClick={() => {}}>
          <Item type="list" text="기획팀" />
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>
          <Item type="list" text="개발팀" />
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>
          <Item type="list" text="운영팀" />
        </DropdownMenu.Item>
  <DropdownMenu.Separator className={styles.separator} />
  {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown;