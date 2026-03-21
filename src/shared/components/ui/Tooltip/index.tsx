import type { ReactNode } from 'react';
import { Tooltip as Tooltips } from 'radix-ui';
import styles from './Tooltip.module.css';

type Align = 'center' | 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  align?: Align;
  side?: Side;
  trigger?: ReactNode;
  items?: ReactNode;
  onClick?: () => void;
}

const Tooltip = (props: TooltipProps) => {
  const { align = 'center', side = 'right', trigger, items, onClick } = props;

  return (
    <Tooltips.Root delayDuration={100}>
      <Tooltips.Trigger asChild onClick={onClick}>
        {trigger}
      </Tooltips.Trigger>
      <Tooltips.Portal>
        <Tooltips.Content
          className={styles.container}
          align={align}
          side={side}
          sideOffset={5}
        >
          {items}
          <Tooltips.Arrow className={styles.arrow} />
        </Tooltips.Content>
      </Tooltips.Portal>
    </Tooltips.Root>
  );
};

export default Tooltip;

Tooltip.Provider = Tooltips.Provider;
