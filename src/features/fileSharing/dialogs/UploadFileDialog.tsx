import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Group, DialogInput } from '@shared/components/dialogs';
import { useFileStore } from '../store/useFileStore';

interface UploadFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  const uploadFile = useFileStore((state) => state.uploadFile);
  const [file, setFile] = useState<File>();

  const handleUploadFile = () => {
    if (!file) return;

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    uploadFile(file, formattedDate);
    onOpenChange(false);
  };

  return (
    <Dialog
      title='파일 업로드'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='업로드'
      onConfirm={handleUploadFile}
    >
      <Group>
        <p>파일 선택</p>
      </Group>
      <DialogInput
        type='file'
        setValue={(e) => e.target.files && setFile(e.target.files[0])}
      />
    </Dialog>
  );
};

export default UploadFileDialog;
