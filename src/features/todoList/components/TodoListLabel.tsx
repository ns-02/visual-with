import styles from './TodoListUI.module.css';

export interface TodoListLabelProps {
  text?: string;
  count?: number;
  children?: React.ReactNode;
}

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
