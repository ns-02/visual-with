import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@components/ui';
import styles from './FriendListDropdown.module.css';
import DeleteFriendDialog from '../dialogs/DeleteFriendDialog';

interface DropdownProps {
  friendId?: string;
  triggerElement?: React.ReactNode;
}

const FriendListDropdown = ({ friendId, triggerElement }: DropdownProps) => {
  const [isDeleteFriendDialogOpen, setIsDeleteFriendDialogOpen] =
    useState(false);

  const Items = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFriendDialogOpen(true) },
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
      <DeleteFriendDialog
        friendId={friendId}
        open={isDeleteFriendDialogOpen}
        onOpenChange={setIsDeleteFriendDialogOpen}
      />
    </>
  );
};

export default FriendListDropdown;
