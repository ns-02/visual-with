import { toast } from '@core/store/useToastStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Dialog } from '@shared/components';
import { useTodoStore } from '../store/useTodoStore';
import { useTodoManager } from '../hooks/useTodoManager';

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
  const { updateTodoInManager } = useTodoManager();
  const pending = useRef(false);
  const todoData = useTodoStore((state) => state.todoData);
  const { teamId } = useWorkspaceParams();

  const currentTodoData = todoData?.find(
    (item) => item.id === todoId && item.teamId === teamId,
  );

  const [title, setTitle] = useState(currentTodoData?.title ?? '');
  const [description, setDescription] = useState(
    currentTodoData?.description ?? '',
  );

  const handleUpdateTodo = async () => {
    if (!title.trim()) return;

    if (pending.current) return;
    pending.current = true;
    try {
      const success = await updateTodoInManager({
        title,
        description,
        todoId,
        authorId: currentTodoData?.authorId,
        authorName: currentTodoData?.authorName,
      });
      if (!success) return;

      setTitle('');
      setDescription('');
      onOpenChange(false);
    } catch {
      toast.error('할 일을 수정하지 못했습니다.');
    } finally {
      pending.current = false;
    }
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
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='할 일 제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb_10'>
        <label>내용</label>
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='할 일을 입력하세요'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default UpdateTodoDialog;
