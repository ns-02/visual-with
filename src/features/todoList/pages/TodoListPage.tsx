import { Circle, CircleCheckBig } from 'lucide-react';
import TodoListLabel from '../components/TodoListLabel';
import styles from './TodoListLayout.module.css';
import TodoListCard from '../components/TodoListCard';
import { useTodoStore } from '../store/useTodoStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useEffect, useMemo, useState } from 'react';
import { TodoData } from '@shared/models/Workspace';
import { getIsPermit } from '@shared/utils/permitUtils';

function TodoListPage() {
  const todoData = useTodoStore((state) => state.todoData);
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const currentRule = useWorkspaceStore((state) => state.currentRule);
  const teamTodoData = useMemo(
    () => todoData.filter((item) => item.teamId === teamId),
    [todoData, teamId],
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
    <div className={styles.todo_list_root}>
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
              onCheckedChange={
                canToggle ? () => toggleTodo(item.id) : undefined
              }
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
              onCheckedChange={
                canToggle ? () => toggleTodo(item.id) : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoListPage;
