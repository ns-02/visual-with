import Button from '@components/ui/Button';
import { ScheduleDialogProps } from '..';
import { Dialog, DialogInput, Group, Row } from '@components/dialogs';

const UpdateScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const confirmButton = <Button text='수정' />;

  return (
    <Dialog
      title='일정 수정'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Group>
        <label>제목</label>
        <DialogInput placeholder='일정 제목을 입력하세요' />
      </Group>

      <Row>
        <Group>
          <label>날짜</label>
          <DialogInput type='date' />
        </Group>
        <Group>
          <label>시간</label>
          <DialogInput type='time' />
        </Group>
      </Row>
      <Group>
        <label>카테고리</label>
        <DialogInput placeholder='일정' />
      </Group>
      <Group>
        <label>설명</label>
        <DialogInput placeholder='일정 설명을 입력하세요 (선택사항)' />
      </Group>
    </Dialog>
  );
};

export default UpdateScheduleDialog;
