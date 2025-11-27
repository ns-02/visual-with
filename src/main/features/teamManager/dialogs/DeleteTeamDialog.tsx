import { useState } from "react";
import AlertDialog from "@components/dialogs/AlertDialog";
import Input from "@components/dialogs/ui/Input";
import Button from "@components/ui/Button";
import { TeamDialogProps } from "../types";

const DeleteTeamDialog = ({ open, onOpenChange, onDelete, deleteTeamData }: TeamDialogProps) => {
  const [confirmText, setConFirmText] = useState("");
  
  const handleDeleteTeam = () => {
    if (confirmText !== '삭제') return;
    if (onDelete) onDelete();
    setConFirmText("");
    onOpenChange(false);
  };
  
  const confirmButton = (<Button text="삭제" onCustomClick={handleDeleteTeam} />);

  return (
    <AlertDialog
      title="팀을 삭제하시겠습니까?"
      description={`"${deleteTeamData?.name}" 팀이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open} 
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Input placeholder="삭제를 입력하세요" value={confirmText} setValue={(e) => setConFirmText(e.target.value)} />
    </AlertDialog>
  )
};

export default DeleteTeamDialog;