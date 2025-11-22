import AlertDialog from "../../../../components/dialogs/AlertDialog";
import Input from "../../../../components/dialogs/ui/Input";
import Button from "../../../../components/ui/Button";
import { TeamDialogProps } from "../types";

const DeleteTeamDialog = ({ open, onOpenChange }: TeamDialogProps) => {
  const confirmButton = (<Button text="삭제" />);

  return (
    <AlertDialog
      title="팀을 삭제하시겠습니까?"
      description="해당 팀이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
      open={open} 
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Input placeholder="삭제를 입력하세요" />
    </AlertDialog>
  )
};

export default DeleteTeamDialog;