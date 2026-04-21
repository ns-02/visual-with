import { useTeamStore } from '@core/store/useTeamStore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog, DialogInput, Group, Row } from '@shared/components/dialogs';
import { getDate } from '@shared/utils/dateUtils';
import { useScheduleStore } from '../store/useScheduleStore';
import { useUserStore } from '@core/store/useUserStore';

export interface AddScheduleDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddScheduleDialog = ({ open, onOpenChange }: AddScheduleDialogProps) => {
  const addSchedule = useScheduleStore((state) => state.addSchedule);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const [title, setTitle] = useState('');
  const [startDate, setstartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const { year, month, day, hour, minute } = getDate();
    setstartDate(`${year}-${month}-${day}`);
    setStartTime(`${hour}:${minute}`);
  }, []);

  const handleAddSchedule = () => {
    if (
      !title ||
      !startDate ||
      !startTime ||
      !selectTeamId ||
      !userId ||
      !userName
    )
      return;

    addSchedule({
      title,
      description,
      authorId: userId,
      authorName: userName,
      startDate,
      startTime,
      finishDate: finishDate || undefined,
      finishTime: finishTime || undefined,
      teamId: selectTeamId,
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
