import { Dispatch, SetStateAction, useState } from 'react';
import { AlertDialog } from '@shared/components';

import { useTeamManager } from '../hooks/useTeamManager';
import { TeamData } from '@shared/models/Workspace';
import { toast } from '@core/store/useToastStore';

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
  const { onDeleteTeam } = useTeamManager();
  const [confirmText, setConFirmText] = useState('');

  const handleDeleteTeam = () => {
    if (!confirmText.trim()) {
      toast.error('값이 입력되지 않았습니다.');
      return;
    }

    if (confirmText !== '삭제') {
      toast.error('삭제를 입력해주세요.');
      return;
    }

    if (deleteTeamData) onDeleteTeam(deleteTeamData.id);
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
      <input
        name='input'
        autoComplete='off'
        className='dialog_input'
        placeholder='삭제를 입력하세요'
        value={confirmText}
        onChange={(e) => setConFirmText(e.target.value)}
      />
    </AlertDialog>
  );
};

export default DeleteTeamDialog;
