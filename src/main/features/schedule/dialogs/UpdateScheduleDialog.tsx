import { Dispatch, SetStateAction } from "react";
import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Group from "../../../../components/dialogs/ui/Group";
import Row from "../../../../components/dialogs/ui/Row";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UpdateScheduleDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog
      title="일정 수정"
      btnName="수정"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Group>
        <label>제목</label>
        <Input placeholder="일정 제목을 입력하세요" />
      </Group>
      
      <Row>
        <Group>
          <label>날짜</label>
          <Input type="date" />
        </Group>
        <Group>
          <label>시간</label>
          <Input type="time" />
        </Group>
      </Row>
      <Group>
        <label>카테고리</label>
        <Input placeholder="일정" />
      </Group>
      <Group>
        <label>설명</label>
        <Input placeholder="알림 설명을 입력하세요 (선택사항)" />
      </Group>
    </Dialog>
  )
}

export default UpdateScheduleDialog;