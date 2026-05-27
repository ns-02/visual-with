import { Circle, CircleCheckBig } from 'lucide-react';
import styles from './TodoListLayout.module.css';
import TodoListCard from '../components/TodoListCard';
import { useTodoStore } from '../store/useTodoStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { ReactNode, useMemo } from 'react';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { updateTodoCompleteFetch, viewTodo } from '@shared/api/api';

function TodoListPage() {
  const todoData = useTodoStore((state) => state.todoData);
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const { currentRule } = useCurrentWorkspace();
  const progressData = useMemo(
    () => todoData.filter((item) => item.teamId === teamId && !item.checked),
    [todoData, teamId],
  );
  const completedData = useMemo(
    () => todoData.filter((item) => item.teamId === teamId && item.checked),
    [todoData, teamId],
  );

  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const getCanToggle = (authorId: string) =>
    getIsPermit({ authorId, userId, rule: currentRule });

  return (
    <div className={styles.todo_list_root}>
      <div className={styles.contents}>
        <button
          onClick={async () => {
            if (!teamId) return;

            const res = await viewTodo({ teamId });
            console.log(res);
          }}
        >
          테스트용 현재 투두 확인 버튼
        </button>
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
                canToggle
                  ? async () => {
                      if (!teamId) return;

                      await updateTodoCompleteFetch({
                        id: item.id,
                        teamId,
                        userId: item.authorId,
                        complete: !item.checked,
                        completeDate: '날짜',
                        completeTime: '시간',
                        userTeamRole: 'MEMBER',
                      });

                      toggleTodo(item.id);
                    }
                  : undefined
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
                canToggle
                  ? async () => {
                      if (!teamId) return;

                      await updateTodoCompleteFetch({
                        id: item.id,
                        teamId,
                        userId: item.authorId,
                        complete: !item.checked,
                        completeDate: '날짜',
                        completeTime: '시간',
                        userTeamRole: 'MEMBER',
                      });

                      toggleTodo(item.id);
                    }
                  : undefined
              }
            />
          );
        })}
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
