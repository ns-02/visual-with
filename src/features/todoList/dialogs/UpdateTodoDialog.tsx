import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog, Group, DialogInput } from '@shared/components/dialogs';
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
  const todoData = useTodoStore((state) => state.todos);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const currentTodoData = todoData?.find((item) => item.id === todoId);

  useEffect(() => {
    setTitle(currentTodoData?.title ?? '');
    setDescription(currentTodoData?.description ?? '');
  }, [currentTodoData]);

  const handleUpdateTodo = () => {
    if (!title || !todoId) return;

    updateTodo(title, description, todoId);
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
      <Group>
        <label>제목</label>
        <DialogInput
          placeholder='할 일 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </Group>
      <Group>
        <label>내용</label>
        <DialogInput
          placeholder='할 일을 입력하세요'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </Group>
    </Dialog>
  );
};

export default UpdateTodoDialog;
