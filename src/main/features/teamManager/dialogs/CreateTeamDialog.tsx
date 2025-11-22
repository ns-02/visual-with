import Dialog from "../../../../components/dialogs/Dialog";
import Field from "../../../../components/ui/Field";
import { TeamDialogProps } from "../types";

const CreateTeamDialog = ({ open, onOpenChange }: TeamDialogProps) => {
  return (
    <Dialog
      title="팀 생성"
      btnName="생성"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Field label="팀 이름" input="팀 이름을 입력하세요" />
    </Dialog>
  )
}

export default CreateTeamDialog;