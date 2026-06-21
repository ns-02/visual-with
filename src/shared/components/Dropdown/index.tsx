import type { ReactNode } from 'react';
import { DropdownMenu } from 'radix-ui';
import styles from './Dropdown.module.css';

type Align = 'center' | 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';

interface DropDownProps {
  align?: Align;
  side?: Side;
  trigger?: ReactNode;
  children?: ReactNode;
}

const Dropdown = (props: DropDownProps) => {
  const { align = 'start', side, trigger, children } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        side={side}
        align={align}
        className={styles.container}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
