import { DropdownMenu } from 'radix-ui';
import { Item } from '@shared/components/ui';
import { Dropdown } from '@shared/components/ui';
import styles from './TodoListDropdown.module.css';
import { useState } from 'react';
import UpdateTodoDialog from '../dialogs/UpdateTodoDialog';
import DeleteTodoDialog from '../dialogs/DeleteTodoDialog';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamMembershipStore } from '@core/store/useTeamMembershipStore';

interface DropdownProps {
  todoId?: number;
  authorId?: string;
  triggerElement?: React.ReactNode;
}

const TodoListDropdown = ({ todoId, authorId, triggerElement }: DropdownProps) => {
  const [isUpdateTodoDialogOpen, setIsUpdateTodoDialogOpen] = useState(false);
  const [isDeleteTodoDialogOpen, setIsDeleteTodoDialogOpen] = useState(false);
  const userId = useUserStore((state) => state.userId);
  const currentRule = useTeamMembershipStore((state) => state.currentRule);

  const Items = [
    { id: '1', text: '수정', onClick: () => setIsUpdateTodoDialogOpen(true) },
    { id: '2', text: '삭제', onClick: () => setIsDeleteTodoDialogOpen(true) },
  ];
  const EmptyItems = [{ id: '1', text: '권한 부족' }];

  const dropdownContent = (
    <>
      {getIsPermit({ authorId, userId, rule: currentRule })
        ? Items.map((item) => {
            return (
              <DropdownMenu.Item key={item.id} onClick={item.onClick}>
                <Item className={styles.item} type='list' text={item.text} />
              </DropdownMenu.Item>
            );
          })
        : EmptyItems.map((item) => {
            return (
              <DropdownMenu.Item key={item.id}>
                <Item className={styles.item} type='list' text={item.text} />
              </DropdownMenu.Item>
            );
          })}
    </>
  );

  return (
    <>
      <Dropdown trigger={triggerElement} items={dropdownContent} />
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
