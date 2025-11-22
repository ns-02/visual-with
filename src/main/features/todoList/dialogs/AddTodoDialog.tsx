import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Group from "../../../../components/dialogs/ui/Group";
import Button from "../../../../components/ui/Button";
import { TodoDialogProps } from "../types";

const AddTodoDialog = ({ open, onOpenChange }: TodoDialogProps) => {
  const confirmButton = (<Button text="추가" />);

  return (
    <Dialog
      title="할 일 추가"
      open={open} 
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
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