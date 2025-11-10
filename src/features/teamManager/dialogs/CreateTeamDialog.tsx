import CDialog from "../../../components/CDialog";

const CreateTeamDialog = () => {
  const dialogInfo = {
    title: "팀 생성",
    fields: [
      { label: "팀 이름", input: "팀 이름을 입력하세요" },
    ],
    btnOk: { name: "생성", onClick: () => {} }
  }

  return (
    <CDialog dialogInfo={dialogInfo} />
  )
}

CreateTeamDialog.componentName = 'CreateTeam';

export default CreateTeamDialog;