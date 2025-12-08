import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput, Group, Row } from '@components/dialogs';
import Button from '@components/ui/Button';
import { useSchedule } from '@context/ScheduleContext';
import getMaxId from '@utils/getMaxId';
import { ScheduleData } from '@models/Schedule';

export interface AddScheduleDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddScheduleDialog = ({ open, onOpenChange }: AddScheduleDialogProps) => {
  const { scheduleData, setScheduleData } = useSchedule();
  const [title, setTitle] = useState('');
  const [startDate, setstartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddSchedule = () => {
    if (!title || !startDate || !startTime) return;

    const maxId = getMaxId(scheduleData) ?? 0;
    const nextScheduleData: ScheduleData[] = [
      ...scheduleData,
      {
        id: maxId + 1,
        title,
        startDate,
        startTime,
        finishDate,
        finishTime,
        description,
        state: '예정',
      },
    ];

    setScheduleData(nextScheduleData);
    setTitle('');
    setstartDate('');
    setStartTime('');
    setFinishDate('');
    setFinishTime('');
    setDescription('');
    onOpenChange(false);
  };

  const confirmButton = (
    <Button text='추가' onCustomClick={handleAddSchedule} />
  );

  return (
    <Dialog
      title='일정 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Group>
        <label>제목</label>
        <DialogInput
          placeholder='일정 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </Group>

      <Row>
        <Group>
          <label>시작 날짜</label>
          <DialogInput
            type='date'
            value={startDate}
            setValue={(e) => setstartDate(e.target.value)}
          />
        </Group>
        <Group>
          <label>시작 시간</label>
          <DialogInput
            type='time'
            value={startTime}
            setValue={(e) => setStartTime(e.target.value)}
          />
        </Group>
      </Row>
      <Row>
        <Group>
          <label>종료 날짜</label>
          <DialogInput
            type='date'
            value={finishDate}
            setValue={(e) => setFinishDate(e.target.value)}
          />
        </Group>
        <Group>
          <label>종료 시간</label>
          <DialogInput
            type='time'
            value={finishTime}
            setValue={(e) => setFinishTime(e.target.value)}
          />
        </Group>
      </Row>
      <Group>
        <label>카테고리</label>
        <DialogInput placeholder='일정' />
      </Group>
      <Group>
        <label>설명</label>
        <DialogInput
          placeholder='일정 설명을 입력하세요 (선택사항)'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </Group>
    </Dialog>
  );
};

export default AddScheduleDialog;
