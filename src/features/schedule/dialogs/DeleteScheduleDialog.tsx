import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@shared/components/dialogs';
import { useScheduleStore } from '../store/useScheduleStore';

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
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const deleteSchedule = useScheduleStore((state) => state.deleteSchedule);
  const { teamId } = useWorkspaceParams();
  const currentScheduleTitle = scheduleData?.find(
    (item) => item.id === scheduleId && item.teamId === teamId,
  )?.title;

  const handleDeleteSchedule = () => {
    if (!scheduleData || !scheduleId) return;

    deleteSchedule(scheduleId);
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
