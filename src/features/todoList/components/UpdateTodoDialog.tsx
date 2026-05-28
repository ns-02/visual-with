import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput } from '@shared/components';
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

    updateTodoInManager({
      title,
      description,
      todoId,
      authorId: currentTodoData?.authorId,
      authorName: currentTodoData?.authorName,
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
