import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Group, DialogInput } from '@components/dialogs';
import Button from '@components/ui/Button';
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

  const confirmButton = (
    <Button text='업로드' onCustomClick={handleUploadFile} />
  );

  return (
    <Dialog
      title='파일 업로드'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
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
