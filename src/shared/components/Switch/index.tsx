import { Switch as Switches } from 'radix-ui';
import styles from './Switch.module.css';

const Switch = () => {
  return (
    <Switches.Root className={styles.SwitchRoot} id='airplane-mode'>
      <Switches.Thumb className={styles.SwitchThumb} />
    </Switches.Root>
  );
};

export default Switch;
