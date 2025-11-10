import { Dispatch, SetStateAction } from "react";
import Dialog from "../../../components/Dialog";
import Field from "../../../components/ui/Field";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CreateTeamDialog = ({ open, onOpenChange }: Props) => {
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

CreateTeamDialog.componentName = 'CreateTeam';

export default CreateTeamDialog;