import { Dispatch, SetStateAction } from "react";
import AlertDialog from "../../../components/AlertDialog";
import Field from "../../../components/ui/Field";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteTeamDialog = ({ open, onOpenChange }: Props) => {
  return (
    <AlertDialog
      title="팀을 삭제하시겠습니까?"
      description="해당 팀이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
      btnName="삭제"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Field label="" input="삭제를 입력하세요" />
    </AlertDialog>
  )
};

export default DeleteTeamDialog;