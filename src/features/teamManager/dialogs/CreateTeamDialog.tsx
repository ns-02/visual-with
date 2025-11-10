import { Dispatch, SetStateAction } from "react";
import CDialog from "../../../components/CDialog";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CreateTeamDialog = ({ open, onOpenChange }: Props) => {
  const dialogInfo = {
    title: "팀 생성",
    fields: [
      { label: "팀 이름", input: "팀 이름을 입력하세요" },
    ],
    btnOk: { name: "생성", onClick: () => {} }
  }

  return (
    <CDialog open={open} onOpenChange={onOpenChange} dialogInfo={dialogInfo} />
  )
}

CreateTeamDialog.componentName = 'CreateTeam';

export default CreateTeamDialog;