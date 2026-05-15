import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { Dialog, DialogInput } from '@shared/components';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useScheduleStore } from '../store/useScheduleStore';

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
  const scheduleData = useScheduleStore((state) => state.scheduleData);
  const updateSchedule = useScheduleStore((state) => state.updateSchedule);
  const { teamId } = useWorkspaceParams();
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [startDate, setstartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [description, setDescription] = useState('');
  const currentScheduleData = scheduleData?.find(
    (item) => item.id === scheduleId && item.teamId === teamId,
  );

  useEffect(() => {
    if (!currentScheduleData) return;

    setTitle(currentScheduleData.title);
    setAuthorId(currentScheduleData.authorId);
    setAuthorName(currentScheduleData.authorName);
    setstartDate(currentScheduleData.startDate);
    setStartTime(currentScheduleData.startTime);
    setFinishDate(currentScheduleData.finishDate ?? '');
    setFinishTime(currentScheduleData.finishTime ?? '');
    setDescription(currentScheduleData.description ?? '');
  }, [currentScheduleData]);

  const handleUpdateSchedule = () => {
    if (!title || !startDate || !startTime || !scheduleId) return;

    updateSchedule({
      id: scheduleId,
      title,
      description,
      authorId,
      authorName,
      startDate,
      startTime,
      finishDate: finishDate || undefined,
      finishTime: finishTime || undefined,
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
        <DialogInput
          placeholder='일정 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='d_flex gap_6'>
        <div className='mb_10'>
          <label>시작 날짜</label>
          <DialogInput
            type='date'
            value={startDate}
            setValue={(e) => setstartDate(e.target.value)}
          />
        </div>
        <div className='mb_10'>
          <label>시작 시간</label>
          <DialogInput
            type='time'
            value={startTime}
            setValue={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div className='d_flex gap_6'>
        <div className='mb_10'>
          <label>종료 날짜</label>
          <DialogInput
            type='date'
            value={finishDate}
            setValue={(e) => setFinishDate(e.target.value)}
          />
        </div>
        <div className='mb_10'>
          <label>종료 시간</label>
          <DialogInput
            type='time'
            value={finishTime}
            setValue={(e) => setFinishTime(e.target.value)}
          />
        </div>
      </div>
      <div className='mb_10'>
        <label>카테고리</label>
        <DialogInput placeholder='일정' />
      </div>
      <div className='mb_10'>
        <label>설명</label>
        <DialogInput
          placeholder='일정 설명을 입력하세요 (선택사항)'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default UpdateScheduleDialog;
