import { TodoListLabelProps } from '..';
import styles from './TodoListLabel.module.css';

const TodoListLabel = ({ text, count, children }: TodoListLabelProps) => {
  return (
    <div className={styles.label}>
      {children}
      <span>{text}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default TodoListLabel;
