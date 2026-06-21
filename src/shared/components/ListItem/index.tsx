import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './ListItem.module.css';

interface ListItemProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  text?: string;
  children?: ReactNode;
  selected?: boolean;
}

const Item = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { className, text, children, selected = false, ...rest } = props;
  const itemListStyle = `${styles.list_item} ${selected && styles.selected} ${className}`;

  return (
    <div ref={ref} className={itemListStyle} {...rest}>
      <span>{text}</span>
      {children}
    </div>
  );
});

export default Item;
