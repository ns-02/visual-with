import { useState } from 'react';
import DeleteFileDialog from './DeleteFileDialog';
import PermissionDropdown from '@shared/components/PermissionDropdown';

interface DropdownProps {
  fileId?: number;
  triggerElement?: React.ReactNode;
  canEdit?: boolean;
  deleteFile: (fileId: number) => void;
  currentFileName?: string;
}

const FileSharingDropdown = ({
  fileId,
  triggerElement,
  canEdit,
  deleteFile,
  currentFileName,
}: DropdownProps) => {
  const [isDeleteFileDialogOpen, setIsDeleteFileDialogOpen] = useState(false);

  const Actions = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName='w_100 fs_14'
        actions={Actions}
        canEdit={canEdit ?? false}
        triggerElement={triggerElement}
      />
      {isDeleteFileDialogOpen && (
        <DeleteFileDialog
          fileId={fileId}
          open={isDeleteFileDialogOpen}
          onOpenChange={setIsDeleteFileDialogOpen}
          deleteFile={deleteFile}
          currentFileName={currentFileName}
        />
      )}
    </>
  );
};

export default FileSharingDropdown;
