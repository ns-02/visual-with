import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { Button } from '@components/ui';

interface DeleteScheduleDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteScheduleDialog = ({
  open,
  onOpenChange,
}: DeleteScheduleDialogProps) => {
  const confirmButton = <Button text='삭제' />;

  return (
    <AlertDialog
      title='일정을 삭제하시겠습니까?'
      description={`"${`deleteSchedule`}" 일정이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    />
  );
};

export default DeleteScheduleDialog;
