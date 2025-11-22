import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Group from "../../../../components/dialogs/ui/Group";
import { UploadFileDialogProps } from "../types";

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  return (
    <Dialog
      title="파일 업로드"
      btnName="업로드"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Group>
        <p>파일 선택</p>
      </Group>
      <Input type="file" />
    </Dialog>
  )
}

export default UploadFileDialog;