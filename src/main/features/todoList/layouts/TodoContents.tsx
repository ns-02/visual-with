import { useEffect, useState } from 'react';
import { Circle, CircleCheckBig } from 'lucide-react';
import { useTodo } from '@context/TodoContext';
import { TodoData } from '@models/Todo';
import TodoListCard from '../ui/TodoListCard';
import TodoListLabel from '../ui/TodoListLabel';
import styles from './TodoContents.module.css';

function TodoContents() {
  const { todoData, setTodoData } = useTodo();
  const [progressData, setProgressData] = useState<TodoData[] | null>(null);
  const [completedData, setCompletedData] = useState<TodoData[] | null>(null);

  useEffect(() => {
    if (!todoData) return;

    const nextProgressData = todoData.filter((item) => item.checked === false);
    const nextCompletedData = todoData.filter((item) => item.checked === true);

    setProgressData(nextProgressData);
    setCompletedData(nextCompletedData);
  }, [todoData]);

  const handleCheckBoxChange = (id: number) => {
    if (!todoData) return;

    const nextTodoData = todoData.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setTodoData(nextTodoData);
  };

  return (
    <div className={styles.contents}>
      <TodoListLabel text='진행 중' count={progressData?.length}>
        <Circle size={16} />
      </TodoListLabel>
      {progressData?.map((item) => {
        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            checked={item.checked}
            onChange={() => handleCheckBoxChange(item.id)}
          />
        );
      })}
      <TodoListLabel text='완료' count={completedData?.length}>
        <CircleCheckBig size={16} />
      </TodoListLabel>
      {completedData?.map((item) => {
        return (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            checked={item.checked}
            onChange={() => handleCheckBoxChange(item.id)}
          />
        );
      })}
    </div>
  );
}

export default TodoContents;
