import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput } from '@components/dialogs';
import { Button } from '@components/ui';
import useTeamManager from '../hooks/useTeamManager';

interface CreateTeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CreateTeamDialog = ({ open, onOpenChange }: CreateTeamDialogProps) => {
  const { onCreateTeam } = useTeamManager();
  const [teamName, setTeamName] = useState('');

  const handleCreateTeam = async () => {
    if (!teamName) return;
    await onCreateTeam(teamName);
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
