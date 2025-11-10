import { Dispatch, SetStateAction } from "react";
import Dialog from "../../../components/Dialog";
import Field from "../../../components/ui/Field";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const InviteTeamDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog
      title="팀 초대"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <p>[ 게스트 초대 (v) ] [ 유저 초대 ]</p>
      <b>초대 링크</b>
      <p>아래 링크를 복사하여 팀원을 초대하세요.</p>
      <Field label="" input="" />
    </Dialog>
  )
}

InviteTeamDialog.componentName = 'CreateTeam';

export default InviteTeamDialog;