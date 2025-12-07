import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { Button } from '@components/ui';

interface DeleteFriendDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteFriendDialog = ({
  open,
  onOpenChange,
}: DeleteFriendDialogProps) => {
  const confirmButton = <Button text='삭제' />;

  return (
    <AlertDialog
      title='친구를 삭제하시겠습니까?'
      description={`"${`deleteFriend`}" 친구가 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    />
  );
};

export default DeleteFriendDialog;
