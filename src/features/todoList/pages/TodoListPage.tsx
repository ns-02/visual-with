import { Circle, CircleCheckBig } from 'lucide-react';
import styles from './TodoListLayout.module.css';
import TodoListCard from '../components/TodoListCard';
import { ReactNode } from 'react';
import { useTodoManager } from '../hooks/useTodoManager';

function TodoListPage() {
  const { progressData, completedData, updateTodoComplete, getCanToggle } =
    useTodoManager();

  return (
    <div className={styles.todo_list_root}>
      <div className={styles.contents}>
        <TodoListLabel text='진행 중' count={progressData.length}>
          <Circle size={16} />
        </TodoListLabel>

        {progressData.map((item) => (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorId={item.authorId}
            authorName={item.authorName}
            checked={item.checked}
            isCheckDisabled={!getCanToggle(item.authorId)}
            onCheckedChange={async () => await updateTodoComplete(item)}
          />
        ))}

        <TodoListLabel text='완료' count={completedData.length}>
          <CircleCheckBig size={16} />
        </TodoListLabel>

        {completedData.map((item) => (
          <TodoListCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            authorId={item.authorId}
            authorName={item.authorName}
            checked={item.checked}
            isCheckDisabled={!getCanToggle(item.authorId)}
            onCheckedChange={async () => await updateTodoComplete(item)}
          />
        ))}
      </div>
    </div>
  );
}

const TodoListLabel = ({
  text,
  count,
  children,
}: {
  text?: string;
  count?: number;
  children?: ReactNode;
}) => {
  return (
    <div className='common_card_label'>
      {children}
      <span>{text}</span>
      <span className='text_sec_200'>{count}</span>
    </div>
  );
};

export default TodoListPage;
