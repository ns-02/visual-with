import { useTeam } from '@context/TeamContext';
import TodoContents from '../section/TodoContents';
import styles from './TodoListPage.module.css';

function TodoListPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();

  return (
    <div className={styles.page}>
      <TodoContents></TodoContents>
    </div>
  );
}

export default TodoListPage;
