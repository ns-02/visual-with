import React from 'react';
import { Tooltip as Tooltips } from 'radix-ui';
import styles from './Tooltip.module.css';

type Align = 'center' | 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  align?: Align;
  side?: Side;
  trigger?: React.ReactNode;
  items?: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const { align = 'start', side, trigger, items } = props;

  return (
    <Tooltips.Root delayDuration={100}>
      <Tooltips.Trigger asChild>{trigger}</Tooltips.Trigger>
      <Tooltips.Portal>
        <Tooltips.Content
          className={styles.container}
          align='center'
          side='right'
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
