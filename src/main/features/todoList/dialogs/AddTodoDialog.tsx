import { Dispatch, SetStateAction } from "react";
import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Group from "../../../../components/dialogs/ui/Group";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog
      title="할 일 추가"
      btnName="추가"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Group>
        <label>제목</label>
        <Input placeholder="할 일 제목을 입력하세요" />
      </Group>
      <Group>
        <label>내용</label>
        <Input placeholder="할 일을 입력하세요" />
      </Group>
    </Dialog>
  )
}

export default AddTodoDialog;