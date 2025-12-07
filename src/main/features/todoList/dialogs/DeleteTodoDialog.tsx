import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { Button } from '@components/ui';
import { useTodo } from '@context/TodoContext';

interface DeleteTodoDialogProps {
  todoId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteTodoDialog = ({
  todoId,
  open,
  onOpenChange,
}: DeleteTodoDialogProps) => {
  const { todoData, setTodoData } = useTodo();
  const currentTodoTitle = todoData?.find((item) => item.id === todoId)?.title;

  const handleDeleteTodo = () => {
    if (!todoData || !todoId) return;

    const nextTodoData = todoData.filter((item) => item.id !== todoId);
    setTodoData(nextTodoData);
    onOpenChange(false);
  };

  const confirmButton = <Button text='삭제' onCustomClick={handleDeleteTodo} />;

  return (
    <AlertDialog
      title='할 일을 삭제하시겠습니까?'
      description={`"${currentTodoTitle}" 할 일이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    />
  );
};

export default DeleteTodoDialog;
