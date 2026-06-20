import { Circle, CircleCheckBig } from 'lucide-react';
import styles from './TodoListLayout.module.css';
import { ReactNode } from 'react';
import { useTodoManager } from '../hooks/useTodoManager';
import { Card, CheckBox, DropdownTrigger } from '@shared/components';
import TodoListDropdown from '../components/TodoListDropdown';

function TodoListPage() {
  const { progressData, completedData, updateTodoComplete, getCanToggle } =
    useTodoManager();

  return (
    <div className={styles.todo_list_root}>
      <div className={styles.contents}>
        <TodoListLabel text='진행 중' count={progressData.length}>
          <Circle size={16} />
        </TodoListLabel>

        <div className='card_list'>
          {progressData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={`${item.authorName} · ${item.description}`}
              iconElement={
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    alignItems: 'center',
                  }}
                >
                  <CheckBox
                    id={`${item.id ?? ''}`}
                    checked={item.checked ?? false}
                    onCheckedChange={async () => await updateTodoComplete(item)}
                    disabled={!getCanToggle(item.authorId)}
                  />
                </div>
              }
              infoStyle={{
                textDecoration: `${item.checked ? 'line-through' : ''}`,
              }}
            >
              <TodoListDropdown
                todoId={item.id}
                authorId={item.authorId}
                triggerElement={<DropdownTrigger />}
              />
            </Card>
          ))}
        </div>

        <TodoListLabel text='완료' count={completedData.length}>
          <CircleCheckBig size={16} />
        </TodoListLabel>

        <div className='card_list'>
          {completedData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={`${item.authorName} · ${item.description}`}
              iconElement={
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    alignItems: 'center',
                  }}
                >
                  <CheckBox
                    id={`${item.id ?? ''}`}
                    checked={item.checked ?? false}
                    onCheckedChange={async () => await updateTodoComplete(item)}
                    disabled={!getCanToggle(item.authorId)}
                  />
                </div>
              }
              infoStyle={{
                textDecoration: `${item.checked ? 'line-through' : ''}`,
              }}
            >
              <TodoListDropdown
                todoId={item.id}
                authorId={item.authorId}
                triggerElement={<DropdownTrigger />}
              />
            </Card>
          ))}
        </div>
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
