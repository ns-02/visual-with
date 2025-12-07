import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { Button } from '@components/ui';

interface DeleteFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteFileDialog = ({ open, onOpenChange }: DeleteFileDialogProps) => {
  const confirmButton = <Button text='삭제' />;

  return (
    <AlertDialog
      title='파일을 삭제하시겠습니까?'
      description={`"${`deleteFile`}" 파일이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    />
  );
};

export default DeleteFileDialog;
