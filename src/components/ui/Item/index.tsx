import React from 'react';
import { Plus } from 'lucide-react';
import styles from './Item.module.css';

type Type = 'list' | 'add';

interface BaseProps {
  type: Type;
  text?: string;
  icon?: typeof Plus;
  children?: React.ReactNode;
  selected?: boolean;
}

type ItemProps = BaseProps & React.ComponentPropsWithoutRef<'div'>;

const Item = React.forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const { type, text, icon: Icon, children, selected = false, ...rest } = props;
  const itemListStyle = `${styles.itemlist} ${selected && styles.selected}`;

  if (type === 'add') {
    return (
      <div ref={ref} className={styles.itemadd} {...rest}>
        <Plus size={16} />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div ref={ref} className={itemListStyle} {...rest}>
      <span>{text}</span>
      {children}
    </div>
  );
});

export default Item;
