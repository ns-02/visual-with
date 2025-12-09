import React from 'react';
import styles from './TodoListLayout.module.css';

type Prop = {
  children: React.ReactNode;
};

function TodoListRoot({ children }: Prop) {
  return <div className={styles.todo_list_root}>{children}</div>;
}

export default TodoListRoot;
