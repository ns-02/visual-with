import { useState } from 'react';
import DeleteFileDialog from './DeleteFileDialog';
import { useUserStore } from '@core/store/useUserStore';
import { getIsPermit } from '@shared/utils/permitUtils';
import PermissionDropdown from '@shared/components/PermissionDropdown';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

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
  const { currentRule } = useCurrentWorkspace();

  const Actions = [
    { id: '1', text: '삭제', onClick: () => setIsDeleteFileDialogOpen(true) },
  ];

  return (
    <>
      <PermissionDropdown
        itemClassName='w_100 fs_14'
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
