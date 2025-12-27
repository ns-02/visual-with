import { Dispatch, SetStateAction } from 'react';
import { AlertDialog } from '@components/dialogs';
import { useFriend } from '@core/context/FriendContext';

interface DeleteFriendDialogProps {
  friendId?: string;
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

  return (
    <AlertDialog
      title='친구를 삭제하시겠습니까?'
      description={`"${currentFriendName}" 친구가 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.`}
      open={open}
      onOpenChange={onOpenChange}
      confirmText='삭제'
      onConfirm={handleDeleteFriend}
    />
  );
};

export default DeleteFriendDialog;
