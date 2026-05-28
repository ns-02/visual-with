import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components';
import { useTodoStore } from '../store/useTodoStore';
import { useTodoManager } from '../hooks/useTodoManager';

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
  const { deleteTodoInManager } = useTodoManager();

  const todoData = useTodoStore((state) => state.todoData);
  const { teamId } = useWorkspaceParams();
  const currentTodoTitle = todoData?.find(
    (item) => item.id === todoId && item.teamId === teamId,
  )?.title;

  const handleDeleteTodo = () => {
    deleteTodoInManager(todoId);
    onOpenChange(false);
  };

  return (
    <AlertDialog
      title='할 일을 삭제하시겠습니까?'
      description={`"${currentTodoTitle}" 할 일이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmText='삭제'
      onConfirm={handleDeleteTodo}
    />
  );
};

export default DeleteTodoDialog;
