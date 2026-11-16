import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components';

interface DeleteFileDialogProps {
  fileId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  deleteFile: (fileId: number) => void | Promise<boolean>;
  currentFileName?: string;
}

const DeleteFileDialog = ({
  fileId,
  open,
  onOpenChange,
  deleteFile,
  currentFileName,
}: DeleteFileDialogProps) => {
  const handleDeleteFile = async () => {
    if (fileId === undefined) return;

    const deleted = await deleteFile(fileId);
    if (deleted !== false) onOpenChange(false);
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
