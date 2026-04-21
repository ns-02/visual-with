import styles from './TodoListDropdown.module.css';
import { useState } from 'react';
import UpdateTodoDialog from '../dialogs/UpdateTodoDialog';
import DeleteTodoDialog from '../dialogs/DeleteTodoDialog';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import PermissionDropdown from '@shared/domain/PermissionDropdown';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

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
  const currentRule = useWorkspaceStore((state) => state.currentRule);

  const Actions = [
    { id: '1', text: '수정', onClick: () => setIsUpdateTodoDialogOpen(true) },
    { id: '2', text: '삭제', onClick: () => setIsDeleteTodoDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName={styles.item}
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
