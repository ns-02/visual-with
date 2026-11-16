import { Circle, CircleCheckBig } from 'lucide-react';
import styles from './TodoListLayout.module.css';
import { ReactNode } from 'react';
import { useTodoManager } from '../hooks/useTodoManager';
import { InfoCard, CheckBox, DropdownTrigger } from '@shared/components';
import TodoListDropdown from '../components/TodoListDropdown';

function TodoListPage() {
  const {
    progressData,
    completedData,
    loadStatus,
    updateTodoComplete,
    getCanToggle,
  } = useTodoManager(true);

  return (
    <div className={styles.todo_list_root}>
      <div className={styles.contents}>
        <TodoListLabel text='진행 중' count={progressData.length}>
          <Circle size={16} />
        </TodoListLabel>

        <div className='card_list'>
          {loadStatus === 'success' && progressData.length === 0 && (
            <p className={styles.empty_state}>진행 중인 할 일이 없습니다.</p>
          )}
          {loadStatus === 'error' && progressData.length === 0 && (
            <p className={styles.empty_state}>
              할 일 목록을 불러오지 못했습니다.
            </p>
          )}
          {progressData.map((item) => (
            <InfoCard
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
            </InfoCard>
          ))}
        </div>

        <TodoListLabel text='완료' count={completedData.length}>
          <CircleCheckBig size={16} />
        </TodoListLabel>

        <div className='card_list'>
          {loadStatus === 'success' && completedData.length === 0 && (
            <p className={styles.empty_state}>완료된 할 일이 없습니다.</p>
          )}
          {completedData.map((item) => (
            <InfoCard
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
            </InfoCard>
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
