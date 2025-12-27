import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Group, DialogInput } from '@shared/components/dialogs';
import useFileManager from '../hooks/useFileManager';

interface UploadFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  const [file, setFile] = useState<File>();
  const { uploadFile } = useFileManager();

  const handleUploadFile = () => {
    uploadFile(file);
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
