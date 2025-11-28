import React from 'react';
import { Plus } from 'lucide-react';
import { ItemProps } from './ItemProps';
import styles from './Item.module.css';

const Item = React.forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const { type, text, icon: Icon, children, ...rest } = props;

  if (type === 'add') {
    return (
      <div ref={ref} className={styles.itemadd} {...rest}>
        <Plus size={16} />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div ref={ref} className={styles.itemlist} {...rest}>
      <span>{text}</span>
      {children}
    </div>
  );
});

export default Item;
