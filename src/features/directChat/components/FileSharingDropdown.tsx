import { useState } from 'react';
import { useUserStore } from '@core/store/useUserStore';
import PermissionDropdown from '@shared/components/PermissionDropdown';
import DeleteFileDialog from './DeleteFileDialog';

interface DropdownProps {
  fileId?: number;
  triggerElement?: React.ReactNode;
  authorId?: string;
}

const FileSharingDropdown = ({
  fileId,
  triggerElement,
  authorId,
}: DropdownProps) => {
  const [isDeleteFileDialogOpen, setIsDeleteFileDialogOpen] = useState(false);
  const userId = useUserStore((state) => state.user?.id);

  const Actions = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName='w_100 fs_14'
        actions={Actions}
        canEdit={userId === authorId}
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
