import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput, Switch } from '@shared/components';
import { formatDate, formatTime } from '@shared/utils/formatDate';
import { useScheduleManager } from '../hooks/useScheduleManager';

export interface AddScheduleDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddScheduleDialog = ({ open, onOpenChange }: AddScheduleDialogProps) => {
  const { addScheduleInManager } = useScheduleManager();

  const [title, setTitle] = useState('');
  const [startDate, setstartDate] = useState(formatDate());
  const [startTime, setStartTime] = useState(formatTime());
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [description, setDescription] = useState('');
  const [isAllDay, setIsAllDay] = useState(false);

  const handleAddSchedule = async () => {
    if (!title.trim()) return;

    await addScheduleInManager({
      title,
      description,
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
      title='일정 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='추가'
      onConfirm={handleAddSchedule}
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
        <label>종일 여부</label>
        <Switch
          checked={isAllDay}
          onCheckedChange={(checked) => setIsAllDay(checked)}
        />
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

export default AddScheduleDialog;
