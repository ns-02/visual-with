import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, ListItem } from '@shared/components';
import DeleteFriendDialog from './DeleteFriendDialog';

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
            <ListItem className='w_100 fs_14' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return (
    <>
      <Dropdown trigger={triggerElement} items={dropdownContent} />
      {isDeleteFriendDialogOpen && (
        <DeleteFriendDialog
          friendId={friendId}
          open={isDeleteFriendDialogOpen}
          onOpenChange={setIsDeleteFriendDialogOpen}
        />
      )}
    </>
  );
};

export default FriendListDropdown;
