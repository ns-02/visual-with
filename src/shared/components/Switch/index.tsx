import type { ComponentProps } from 'react';
import { Switch as Switches } from 'radix-ui';
import styles from './Switch.module.css';

const Switch = (props: ComponentProps<typeof Switches.Root>) => {
  return (
    <Switches.Root className={styles.SwitchRoot} {...props}>
      <Switches.Thumb className={styles.SwitchThumb} />
    </Switches.Root>
  );
};

export default Switch;
