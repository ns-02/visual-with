import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dialog, Switch } from '@shared/components';
import { Dispatch, SetStateAction, useState } from 'react';
import { useScheduleStore } from '../store/useScheduleStore';
import { useScheduleManager } from '../hooks/useScheduleManager';

export interface UpdateScheduleDialogProps {
  scheduleId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UpdateScheduleDialog = ({
  scheduleId,
  open,
  onOpenChange,
}: UpdateScheduleDialogProps) => {
  const { updateScheduleInManager } = useScheduleManager();
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const { teamId } = useWorkspaceParams();

  const currentData = scheduleData?.find(
    (item) => item.id === scheduleId && item.teamId === teamId,
  );

  const [title, setTitle] = useState(currentData?.title ?? '');
  const [startDate, setstartDate] = useState(currentData?.startDate ?? '');
  const [startTime, setStartTime] = useState(currentData?.startTime ?? '');
  const [finishDate, setFinishDate] = useState(currentData?.finishDate ?? '');
  const [finishTime, setFinishTime] = useState(currentData?.finishTime ?? '');
  const [description, setDescription] = useState(
    currentData?.description ?? '',
  );
  const [isAllDay, setIsAllDay] = useState(false);

  const handleUpdateSchedule = async () => {
    if (!title.trim()) return;

    await updateScheduleInManager({
      scheduleId,
      title,
      description,
      authorId: currentData?.authorId ?? '',
      authorName: currentData?.authorName ?? '',
      startDate,
      startTime,
      finishDate,
      finishTime,
      isAllDay,
    });

    setTitle('');
    setstartDate('');
    setStartTime('');
    setFinishDate('');
    setFinishTime('');
    setDescription('');
    onOpenChange(false);
  };

  return (
    <Dialog
      title='일정 수정'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='수정'
      onConfirm={handleUpdateSchedule}
    >
      <div className='mb_10'>
        <label>제목</label>
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='일정 제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='d_flex gap_6'>
        <div className='mb_10'>
          <label>시작 날짜</label>
          <input
            type='date'
            name='input'
            autoComplete='off'
            className='dialog_input'
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />
        </div>
        <div className='mb_10'>
          <label>시작 시간</label>
          <input
            type='time'
            name='input'
            autoComplete='off'
            className='dialog_input'
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div className='d_flex gap_6'>
        <div className='mb_10'>
          <label>종료 날짜</label>
          <input
            type='date'
            name='input'
            autoComplete='off'
            className='dialog_input'
            value={finishDate}
            onChange={(e) => setFinishDate(e.target.value)}
          />
        </div>
        <div className='mb_10'>
          <label>종료 시간</label>
          <input
            type='time'
            name='input'
            autoComplete='off'
            className='dialog_input'
            value={finishTime}
            onChange={(e) => setFinishTime(e.target.value)}
          />
        </div>
      </div>
      <div className='mb_10'>
        <label>종일 여부</label>
        <Switch
          checked={isAllDay}
          onCheckedChange={(checked) => setIsAllDay(checked)}
        />
      </div>
      <div className='mb_10'>
        <label>설명</label>
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='일정 설명을 입력하세요 (선택사항)'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default UpdateScheduleDialog;
