import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components/dialogs';
import { useFileStore } from '../store/useFileStore';

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
  const fileData = useFileStore((state) => state.fileData);
  const deleteFile = useFileStore((state) => state.deleteFile);
  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);
  const currentFileName = fileData?.find(
    (item) => item.id === fileId && item.teamId === selectTeamId,
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
