import { useTeamStore } from '@core/store/useTeamStore';
import { useEffect, useMemo, useState } from 'react';
import { Circle, CircleCheckBig } from 'lucide-react';
import { TodoData } from '@features/todoList/models/Todo';
import TodoListCard from '../ui/TodoListCard';
import TodoListLabel from '../ui/TodoListLabel';
import styles from './TodoListLayout.module.css';
import { useTodoStore } from '../store/useTodoStore';

function TodoContents() {
  const todoData = useTodoStore((state) => state.todoData);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const teamTodoData = useMemo(
    () => todoData.filter((item) => item.teamId === selectTeamId),
    [todoData, selectTeamId],
  );
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const [progressData, setProgressData] = useState<TodoData[]>([]);
  const [completedData, setCompletedData] = useState<TodoData[]>([]);

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
        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorName={item.authorName}
            checked={item.checked}
            onCheckedChange={() => toggleTodo(item.id)}
          />
        );
      })}
      <TodoListLabel text='완료' count={completedData.length}>
        <CircleCheckBig size={16} />
      </TodoListLabel>
      {completedData.map((item) => {
        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorName={item.authorName}
            checked={item.checked}
            onCheckedChange={() => toggleTodo(item.id)}
          />
        );
      })}
    </div>
  );
}

export default TodoContents;
