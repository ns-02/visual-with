import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { Button } from '@components/ui';
import { useFriend } from '@context/FriendContext';

interface DeleteFriendDialogProps {
  friendId?: number;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const DeleteFriendDialog = ({
  friendId,
  open,
  onOpenChange,
}: DeleteFriendDialogProps) => {
  const { friendData, setFriendData } = useFriend();
  const currentFriendName = friendData?.find(
    (item) => item.id === friendId,
  )?.name;

  const handleDeleteFriend = () => {
    if (!friendData || !friendId) return;

    const nextFriendData = friendData.filter((item) => item.id !== friendId);
    setFriendData(nextFriendData);
    onOpenChange(false);
  };

  const confirmButton = (
    <Button text='삭제' onCustomClick={handleDeleteFriend} />
  );

  return (
    <AlertDialog
      title='친구를 삭제하시겠습니까?'
      description={`"${currentFriendName}" 친구가 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    />
  );
};

export default DeleteFriendDialog;
