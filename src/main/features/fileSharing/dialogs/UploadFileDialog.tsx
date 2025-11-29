import { Dialog, Group, DialogInput } from '@components/dialogs';
import Button from '@components/ui/Button';
import { UploadFileDialogProps } from '..';

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  const confirmButton = <Button text='업로드' />;

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
      <DialogInput type='file' />
    </Dialog>
  );
};

export default UploadFileDialog;
