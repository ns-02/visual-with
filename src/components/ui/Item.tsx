import React from 'react';
import { Plus } from 'lucide-react';
import styles from './Item.module.css';

type Type = 'list' | 'add'

interface BaseProps {
  type: Type;
  text?: string;
  icon?: typeof Plus;
  children?: React.ReactNode;
}

type CombinedProps = BaseProps & React.ComponentPropsWithoutRef<'div'>;

const Item = React.forwardRef<HTMLDivElement, CombinedProps>((props, ref) => {
  const { type, text, icon: Icon, children, ...rest } = props;

  if (type === 'add') {
    return (
      <div 
        ref={ref}
        className={styles.itemadd}
        {...rest}
      >
        <Plus size={16} />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div 
      ref={ref}
      className={styles.itemlist}
      {...rest}
    >
      <span>{text}</span>
      {children}
    </div>
  )
});

export default Item;