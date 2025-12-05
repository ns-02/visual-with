import { useTeam } from '@context/TeamContext';
import TodoContents from '../layouts/TodoContents';
import styles from './TodoListPage.module.css';

function TodoListPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamId } = useTeam();

  return (
    <div className={styles.page}>
      <TodoContents></TodoContents>
    </div>
  );
}

export default TodoListPage;
