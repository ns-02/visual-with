import { Plus } from 'lucide-react';
import styles from './Item.module.css';
import React from 'react';

type Type = 'list' | 'add'

interface BaseProps {
  type: Type;
  text?: string;
  icon?: typeof Plus;
}

type CombinedProps = BaseProps & React.ComponentPropsWithoutRef<'div'>;

const Item = React.forwardRef<HTMLDivElement, CombinedProps>((props, ref) => {
  const { type, text, icon: Icon, ...rest } = props;
  const iconStyle = `${(styles as any)[`icon--size-16`]}`;

  if (type === 'add') {
    return (
      <div 
        ref={ref}
        className={styles.item}
        {...rest}
      >
        <Plus className={iconStyle} />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div 
      ref={ref}
      className={styles.item}
      {...rest}
    >
      <span>{text}</span>
    </div>
  )
});

export default Item;