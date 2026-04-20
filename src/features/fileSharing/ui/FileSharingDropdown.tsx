import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@shared/components/ui';
import styles from './FileSharingDropdown.module.css';
import DeleteFileDialog from '../dialogs/DeleteFileDialog';
import { useUserStore } from '@core/store/useUserStore';
import { getIsAdmin } from '@shared/utils/getIsAdmin';
import { useTeamMembershipStore } from '@core/store/useTeamMembershipStore';

interface DropdownProps {
  fileId?: number;
  triggerElement?: React.ReactNode;
  uploader?: string;
}

const FileSharingDropdown = ({
  fileId,
  triggerElement,
  uploader,
}: DropdownProps) => {
  const [isDeleteFileDialogOpen, setIsDeleteFileDialogOpen] = useState(false);
  const userId = useUserStore((state) => state.userId);
  const currentRule = useTeamMembershipStore((state) => state.currentRule);

  const Items = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
  ];

  const EmptyItems = [{ id: '1', text: '권한 부족' }];

  const checkIsMe = (): boolean => {
    if (uploader === userId) return true;

    return false;
  };

  const getIsPermit = () => {
    if (getIsAdmin(currentRule) || checkIsMe()) {
      return true;
    }

    return false;
  };

  const dropdownContent = (
    <>
      {getIsPermit()
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
      <DeleteFileDialog
        fileId={fileId}
        open={isDeleteFileDialogOpen}
        onOpenChange={setIsDeleteFileDialogOpen}
      />
    </>
  );
};

export default FileSharingDropdown;
