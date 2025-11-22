import { useState } from "react";
import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Button from "../../../../components/ui/Button";
import { TeamDialogProps } from "../types";

const CreateTeamDialog = ({ open, onOpenChange }: TeamDialogProps) => {
  const [teamName, setTeamName] = useState("");

  const handleConfirm = () => {
    setTeamName("");
    onOpenChange(false);
  };

  const confirmButton = (<Button text="생성" onCustomClick={handleConfirm} />);

  return (
    <Dialog
      title="팀 생성"
      open={open} 
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <p>팀 이름</p>
      <Input placeholder="팀 이름을 입력하세요" value={teamName} setValue={(e) => setTeamName(e.target.value)} />
    </Dialog>
  )
}

export default CreateTeamDialog;