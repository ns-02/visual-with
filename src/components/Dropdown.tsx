import { DropdownMenu } from 'radix-ui';
import DropDownProps from './DropdownProps';
import styles from './Dropdown.module.css';

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
