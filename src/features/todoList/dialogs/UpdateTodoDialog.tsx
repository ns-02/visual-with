import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog, Group, DialogInput } from '@shared/components/dialogs';
import { useTodo } from '@core/context/TodoContext';
import { TodoData } from '@shared/models/Todo';

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
  const { todoData, setTodoData } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const currentTodoData = todoData?.find((item) => item.id === todoId);

  useEffect(() => {
    setTitle(currentTodoData?.title ?? '');
    setDescription(currentTodoData?.description ?? '');
  }, [currentTodoData]);

  const handleUpdateTodo = () => {
    if (!title || !todoId) return;

    const nextTodoData: TodoData[] = todoData.map((item) =>
      item.id === todoId ? { ...item, title, description } : item,
    );

    setTodoData(nextTodoData);
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
