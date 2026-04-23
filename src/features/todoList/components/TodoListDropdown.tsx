import { useState } from 'react';
import UpdateTodoDialog from './UpdateTodoDialog';
import DeleteTodoDialog from './DeleteTodoDialog';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import PermissionDropdown from '@shared/components/PermissionDropdown';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

interface DropdownProps {
  todoId?: number;
  authorId?: string;
  triggerElement?: React.ReactNode;
}

const TodoListDropdown = ({
  todoId,
  authorId,
  triggerElement,
}: DropdownProps) => {
  const [isUpdateTodoDialogOpen, setIsUpdateTodoDialogOpen] = useState(false);
  const [isDeleteTodoDialogOpen, setIsDeleteTodoDialogOpen] = useState(false);
  const userId = useUserStore((state) => state.user?.id);
  const { currentRule } = useCurrentWorkspace();

  const Actions = [
    { id: '1', text: '수정', onClick: () => setIsUpdateTodoDialogOpen(true) },
    { id: '2', text: '삭제', onClick: () => setIsDeleteTodoDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName='w_100 fs_14'
        actions={Actions}
        canEdit={getIsPermit({ authorId, userId, rule: currentRule })}
        triggerElement={triggerElement}
      />
      <UpdateTodoDialog
        todoId={todoId}
        open={isUpdateTodoDialogOpen}
        onOpenChange={setIsUpdateTodoDialogOpen}
      />
      <DeleteTodoDialog
        todoId={todoId}
        open={isDeleteTodoDialogOpen}
        onOpenChange={setIsDeleteTodoDialogOpen}
      />
    </>
  );
};

export default TodoListDropdown;
