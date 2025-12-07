import { DropdownMenu } from 'radix-ui';
import { Item } from '@components/ui';
import { Dropdown } from '@components/ui';
import styles from './TodoListDropdown.module.css';
import { useState } from 'react';
import UpdateTodoDialog from '../dialogs/UpdateTodoDialog';
import DeleteTodoDialog from '../dialogs/DeleteTodoDialog';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const TodoListDropdown = ({ triggerElement }: DropdownProps) => {
  const [isUpdateTodoDialogOpen, setIsUpdateTodoDialogOpen] = useState(false);
  const [isDeleteTodoDialogOpen, setIsDeleteTodoDialogOpen] = useState(false);

  const Items = [
    { id: '1', text: '수정', onClick: () => setIsUpdateTodoDialogOpen(true) },
    { id: '2', text: '삭제', onClick: () => setIsDeleteTodoDialogOpen(true) },
  ];

  const dropdownContent = (
    <>
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onClick={item.onClick}>
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
        open={isUpdateTodoDialogOpen}
        onOpenChange={setIsUpdateTodoDialogOpen}
      />
      <DeleteTodoDialog
        open={isDeleteTodoDialogOpen}
        onOpenChange={setIsDeleteTodoDialogOpen}
      />
    </>
  );
};

export default TodoListDropdown;
