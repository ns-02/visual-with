import { Dialog, Group, DialogInput } from '@components/dialogs';
import { Button } from '@components/ui';
import { TodoDialogProps } from '..';

const UpdateTodoDialog = ({ open, onOpenChange }: TodoDialogProps) => {
  const confirmButton = <Button text='수정' />;

  return (
    <Dialog
      title='할 일 수정'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Group>
        <label>제목</label>
        <DialogInput placeholder='할 일 제목을 입력하세요' />
      </Group>
      <Group>
        <label>내용</label>
        <DialogInput placeholder='할 일을 입력하세요' />
      </Group>
    </Dialog>
  );
};

export default UpdateTodoDialog;
