import { Dispatch, SetStateAction, useState } from 'react';
import { AlertDialog, DialogInput } from '@shared/components/dialogs';
import { TeamData } from '@shared/models/Team';
import useTeamManager from '../hooks/useTeamManager';

interface DeleteTeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  deleteTeamData?: TeamData;
}

const DeleteTeamDialog = ({
  open,
  onOpenChange,
  deleteTeamData,
}: DeleteTeamDialogProps) => {
  const { deleteTeam } = useTeamManager();
  const [confirmText, setConFirmText] = useState('');

  const handleDeleteTeam = () => {
    if (confirmText !== '삭제') return;
    if (deleteTeamData) deleteTeam(deleteTeamData.id);
    setConFirmText('');
    onOpenChange(false);
  };

  return (
    <AlertDialog
      title='팀을 삭제하시겠습니까?'
      description={`"${deleteTeamData?.name}" 팀이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmText='삭제'
      onConfirm={handleDeleteTeam}
    >
      <DialogInput
        placeholder='삭제를 입력하세요'
        value={confirmText}
        setValue={(e) => setConFirmText(e.target.value)}
      />
    </AlertDialog>
  );
};

export default DeleteTeamDialog;
