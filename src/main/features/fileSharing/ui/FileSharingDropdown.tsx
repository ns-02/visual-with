import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@components/ui';
import styles from './FileSharingDropdown.module.css';
import DeleteFileDialog from '../dialogs/DeleteFileDialog';

interface DropdownProps {
  fileId?: number;
  triggerElement?: React.ReactNode;
}

const FileSharingDropdown = ({ fileId, triggerElement }: DropdownProps) => {
  const [isDeleteFileDialogOpen, setIsDeleteFileDialogOpen] = useState(false);

  const Items = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
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
      <DeleteFileDialog
        fileId={fileId}
        open={isDeleteFileDialogOpen}
        onOpenChange={setIsDeleteFileDialogOpen}
      />
    </>
  );
};

export default FileSharingDropdown;
