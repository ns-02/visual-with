import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { useFile } from '@context/FileContext';
import { FileData } from '@models/File';

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
  const { fileData, setFileData } = useFile();
  const currentFileName = fileData?.find(
    (item) => item.id === fileId,
  )?.fileName;

  const handleDeleteFile = () => {
    if (!fileData || !fileId) return;

    const nextFileData: FileData[] = fileData.filter(
      (item) => item.id !== fileId,
    );
    setFileData(nextFileData);
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
