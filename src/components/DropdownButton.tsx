import { DropdownMenu } from "radix-ui";
import Button from "./ui/Button";
import styles from './DropdownButton.module.css';
import Item from "./ui/Item";

interface Props {
  text?: string;
}

const DropdownButton = (props: Props) => {
  const { text } = props;

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
        <DropdownMenu.Item>
          <Item type="add" text="팀 생성" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default DropdownButton;