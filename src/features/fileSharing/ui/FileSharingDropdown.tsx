import { useState } from 'react';
import styles from './FileSharingDropdown.module.css';
import DeleteFileDialog from '../dialogs/DeleteFileDialog';
import { useUserStore } from '@core/store/useUserStore';
import { getIsPermit } from '@shared/utils/permitUtils';
import PermissionDropdown from '@shared/domain/PermissionDropdown';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

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
  const userId = useUserStore((state) => state.user?.id);
  const currentRule = useWorkspaceStore((state) => state.currentRule);

  const Actions = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName={styles.item}
        actions={Actions}
        canEdit={getIsPermit({ authorId: uploader, userId, rule: currentRule })}
        triggerElement={triggerElement}
      />
      <DeleteFileDialog
        fileId={fileId}
        open={isDeleteFileDialogOpen}
        onOpenChange={setIsDeleteFileDialogOpen}
      />
    </>
  );
};

export default FileSharingDropdown;
