import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components/dialogs';
import { useSchedule } from '@core/context/ScheduleContext';
import { ScheduleData } from '@shared/models/Schedule';

interface DeleteScheduleDialogProps {
  scheduleId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteScheduleDialog = ({
  scheduleId,
  open,
  onOpenChange,
}: DeleteScheduleDialogProps) => {
  const { scheduleData, setScheduleData } = useSchedule();
  const currentScheduleTitle = scheduleData?.find(
    (item) => item.id === scheduleId,
  )?.title;

  const handleDeleteSchedule = () => {
    if (!scheduleData || !scheduleId) return;

    const nextScheduleData: ScheduleData[] = scheduleData.filter(
      (item) => item.id !== scheduleId,
    );
    setScheduleData(nextScheduleData);
    onOpenChange(false);
  };

  return (
    <AlertDialog
      title='일정을 삭제하시겠습니까?'
      description={`"${currentScheduleTitle}" 일정이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmText='삭제'
      onConfirm={handleDeleteSchedule}
    />
  );
};

export default DeleteScheduleDialog;
