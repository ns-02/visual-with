import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog, DialogInput } from '@shared/components';
import { useTodoStore } from '../store/useTodoStore';

interface UpdateTodoDialogProps {
  todoId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UpdateTodoDialog = ({
  todoId,
  open,
  onOpenChange,
}: UpdateTodoDialogProps) => {
  const todoData = useTodoStore((state) => state.todoData);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authorName, setAuthorName] = useState('');
  const currentTodoData = todoData?.find(
    (item) => item.id === todoId && item.teamId === teamId,
  );

  useEffect(() => {
    setTitle(currentTodoData?.title ?? '');
    setDescription(currentTodoData?.description ?? '');
    setAuthorId(currentTodoData?.authorId ?? userId ?? '');
    setAuthorName(currentTodoData?.authorName ?? userName ?? '');
  }, [currentTodoData, userId, userName]);

  const handleUpdateTodo = () => {
    if (!title || !todoId || !authorId || !authorName) return;

    updateTodo({
      id: todoId,
      title,
      description: description || undefined,
      authorId,
      authorName,
    });
    setTitle('');
    setDescription('');
    onOpenChange(false);
  };

  return (
    <Dialog
      title='할 일 수정'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='수정'
      onConfirm={handleUpdateTodo}
    >
      <div className='mb_10'>
        <label>제목</label>
        <DialogInput
          placeholder='할 일 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb_10'>
        <label>내용</label>
        <DialogInput
          placeholder='할 일을 입력하세요'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default UpdateTodoDialog;
