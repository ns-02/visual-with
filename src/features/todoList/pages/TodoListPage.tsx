import TodoContents from "../section/TodoContents";
import styles from './TodoListPage.module.css'

function TodoListPage() {
  return (
    <div className={styles.page}>
      <TodoContents></TodoContents>
    </div>
  )
}

export default TodoListPage;
