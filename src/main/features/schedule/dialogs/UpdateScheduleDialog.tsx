import { Dialog, DialogInput, Group, Row } from '@components/dialogs';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSchedule } from '@context/ScheduleContext';
import { ScheduleData } from '@models/Schedule';

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
  const { scheduleData, setScheduleData } = useSchedule();
  const [title, setTitle] = useState('');
  const [startDate, setstartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [description, setDescription] = useState('');
  const currentScheduleData = scheduleData?.find(
    (item) => item.id === scheduleId,
  );

  useEffect(() => {
    setTitle(currentScheduleData?.title ?? '');
    setstartDate(currentScheduleData?.startDate ?? '');
    setStartTime(currentScheduleData?.startTime ?? '');
    setFinishDate(currentScheduleData?.finishDate ?? '');
    setFinishTime(currentScheduleData?.finishTime ?? '');
    setDescription(currentScheduleData?.description ?? '');
  }, [currentScheduleData]);

  const handleUpdateSchedule = () => {
    if (!title || !startDate || !startTime) return;

    const nextScheduleData: ScheduleData[] = scheduleData.map((item) =>
      item.id === scheduleId
        ? {
            ...item,
            title,
            startDate,
            startTime,
            finishDate,
            finishTime,
            description,
          }
        : item,
    );

    setScheduleData(nextScheduleData);
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

export default UpdateScheduleDialog;
