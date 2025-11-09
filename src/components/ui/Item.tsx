import { Plus } from 'lucide-react';
import styles from './Item.module.css';

type Type = 'list' | 'add'

interface Props {
  type: Type;
  text?: string;
  icon?: typeof Plus;
}

const Item = (props: Props) => {
  const { type, text, icon: Icon } = props;
  const iconStyle = `${(styles as any)[`icon--size-16`]}`;

  if (type === 'add') {
    return (
      <div className={styles.item}>
        <Plus className={iconStyle} />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div className={styles.item}>
      <span>{text}</span>
    </div>
  )
}

export default Item;