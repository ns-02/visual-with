import { useTeamStore } from '@core/store/useTeamStore';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamMembershipStore } from '@core/store/useTeamMembershipStore';
import { useEffect, useMemo, useState } from 'react';
import { Circle, CircleCheckBig } from 'lucide-react';
import { TodoData } from '@features/todoList/models/Todo';
import { getIsPermit } from '@shared/utils/permitUtils';
import TodoListCard from '../ui/TodoListCard';
import TodoListLabel from '../ui/TodoListLabel';
import styles from './TodoListLayout.module.css';
import { useTodoStore } from '../store/useTodoStore';

function TodoContents() {
  const todoData = useTodoStore((state) => state.todoData);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const userId = useUserStore((state) => state.userId);
  const currentRule = useTeamMembershipStore((state) => state.currentRule);
  const teamTodoData = useMemo(
    () => todoData.filter((item) => item.teamId === selectTeamId),
    [todoData, selectTeamId],
  );
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const [progressData, setProgressData] = useState<TodoData[]>([]);
  const [completedData, setCompletedData] = useState<TodoData[]>([]);
  const getCanToggle = (authorId: string) =>
    getIsPermit({ authorId, userId, rule: currentRule });

  useEffect(() => {
    const nextProgressData = teamTodoData.filter((item) => !item.checked);
    const nextCompletedData = teamTodoData.filter((item) => item.checked);

    setProgressData(nextProgressData);
    setCompletedData(nextCompletedData);
  }, [teamTodoData]);

  return (
    <div className={styles.contents}>
      <TodoListLabel text='진행 중' count={progressData.length}>
        <Circle size={16} />
      </TodoListLabel>
      {progressData.map((item) => {
        const canToggle = getCanToggle(item.authorId);

        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorId={item.authorId}
            authorName={item.authorName}
            checked={item.checked}
            isCheckDisabled={!canToggle}
            onCheckedChange={canToggle ? () => toggleTodo(item.id) : undefined}
          />
        );
      })}
      <TodoListLabel text='완료' count={completedData.length}>
        <CircleCheckBig size={16} />
      </TodoListLabel>
      {completedData.map((item) => {
        const canToggle = getCanToggle(item.authorId);

        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorId={item.authorId}
            authorName={item.authorName}
            checked={item.checked}
            isCheckDisabled={!canToggle}
            onCheckedChange={canToggle ? () => toggleTodo(item.id) : undefined}
          />
        );
      })}
    </div>
  );
}

export default TodoContents;
