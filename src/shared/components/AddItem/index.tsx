import { Plus } from 'lucide-react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './AddItem.module.css';

interface AddItemProps extends ComponentPropsWithoutRef<'div'> {
  text?: string;
  icon?: typeof Plus;
}

const AddItem = forwardRef<HTMLDivElement, AddItemProps>((props, ref) => {
  const { text, icon: Icon = Plus, ...rest } = props;

  return (
    <div ref={ref} className={styles.add_item} {...rest}>
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
});

export default AddItem;
