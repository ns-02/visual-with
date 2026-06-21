import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components';
import { useTeamFileStore } from '../store/useTeamFileStore';

interface DeleteFileDialogProps {
  fileId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteFileDialog = ({
  fileId,
  open,
  onOpenChange,
}: DeleteFileDialogProps) => {
  const fileData = useTeamFileStore((state) => state.fileData);
  const deleteFile = useTeamFileStore((state) => state.deleteFile);
  const { teamId } = useWorkspaceParams();
  const currentFileName = fileData?.find(
    (item) => item.id === fileId && item.teamId === teamId,
  )?.fileName;

  const handleDeleteFile = () => {
    if (!fileData || !fileId) return;

    deleteFile(fileId);
    onOpenChange(false);
  };

  return (
    <AlertDialog
      title='파일을 삭제하시겠습니까?'
      description={`"${currentFileName}" 파일이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmText='삭제'
      onConfirm={handleDeleteFile}
    />
  );
};

export default DeleteFileDialog;
