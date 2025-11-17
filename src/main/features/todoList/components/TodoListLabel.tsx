import React from "react";
import styles from './TodoListLabel.module.css';

interface Props {
  text?: string;
  count?: number;
  children?: React.ReactNode;
}

const TodoListLabel = ({ text, count, children }: Props) => {
  return (
    <div className={styles.label}>
      {children}
      <span>{text}</span>
      <span className={styles.count}>{count}</span>
    </div>
  )
}

export default TodoListLabel;