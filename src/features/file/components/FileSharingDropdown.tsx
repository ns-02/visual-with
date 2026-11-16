import { useState } from 'react';
import DeleteFileDialog from './DeleteFileDialog';
import PermissionDropdown from '@shared/components/PermissionDropdown';
import RenameFileDialog from './RenameFileDialog';

interface DropdownProps {
  fileId?: number;
  triggerElement?: React.ReactNode;
  canEdit?: boolean;
  deleteFile: (fileId: number) => void | Promise<boolean>;
  renameFile?: (fileId: number, newFileName: string) => Promise<boolean>;
  currentFileName?: string;
}

const FileSharingDropdown = ({
  fileId,
  triggerElement,
  canEdit,
  deleteFile,
  renameFile,
  currentFileName,
}: DropdownProps) => {
  const [isDeleteFileDialogOpen, setIsDeleteFileDialogOpen] = useState(false);
  const [isRenameFileDialogOpen, setIsRenameFileDialogOpen] = useState(false);

  const Actions = [
    ...(renameFile
      ? [
          {
            id: 'rename',
            text: '이름 변경',
            onClick: () => setIsRenameFileDialogOpen(true),
          },
        ]
      : []),
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
      {isRenameFileDialogOpen && renameFile && fileId !== undefined && (
        <RenameFileDialog
          open={isRenameFileDialogOpen}
          onOpenChange={setIsRenameFileDialogOpen}
          fileId={fileId}
          currentFileName={currentFileName ?? ''}
          renameFile={renameFile}
        />
      )}
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
