import { useState } from 'react';
import { Dialog, DialogInput } from '@components/dialogs';
import { Button } from '@components/ui';
import { TeamDialogProps } from '..';

const CreateTeamDialog = ({
  open,
  onOpenChange,
  onCreate,
}: TeamDialogProps) => {
  const [teamName, setTeamName] = useState('');

  const handleCreateTeam = () => {
    if (!teamName) return;
    if (onCreate) onCreate(teamName);
    setTeamName('');
    onOpenChange(false);
  };

  const confirmButton = <Button text='생성' onCustomClick={handleCreateTeam} />;

  return (
    <Dialog
      title='팀 생성'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <p>팀 이름</p>
      <DialogInput
        placeholder='팀 이름을 입력하세요'
        value={teamName}
        setValue={(e) => setTeamName(e.target.value)}
      />
    </Dialog>
  );
};

export default CreateTeamDialog;
