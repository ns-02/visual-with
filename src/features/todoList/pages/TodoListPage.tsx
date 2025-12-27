import { useTeam } from '@core/context/TeamContext';
import TodoContents from '../layouts/TodoContents';
import TodoListRoot from '../layouts/TodoListRoot';

function TodoListPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamId } = useTeam();

  return (
    <TodoListRoot>
      <TodoContents></TodoContents>
    </TodoListRoot>
  );
}

export default TodoListPage;
