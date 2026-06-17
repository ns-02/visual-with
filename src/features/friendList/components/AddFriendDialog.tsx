import { Search } from 'lucide-react';
import { Dialog, DialogInput } from '@shared/components';
import { Button } from '@shared/components';
import { Dispatch, SetStateAction, useState } from 'react';
import { notFriendDataMocks } from '@mocks/FriendDataMocks';
import { toast } from '@core/store/useToastStore';

const AddFriendDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const [friendId, setFriendId] = useState('');
  const [isFriendPresent, setIsFriendPresent] = useState(false);
  const [requestFriendName, setRequestFriendName] = useState('');

  const handleRequestFriend = () => {
    if (!friendId) {
      toast.error('ID가 입력되지 않았습니다.');
      return;
    }
    if (!isFriendPresent) {
      toast.error('잘못된 ID이거나, ID를 검색하지 않았습니다.');
      return;
    }

    toast.success(`${requestFriendName}님께 성공적으로 요청을 보냈습니다.`);

    setFriendId('');
    onOpenChange(false);
  };

  const handleSearchFriend = () => {
    // 프론트에서 처리할 로직은 아님. 실제로는 서버 요청 -> 응답 형식으로 구현
    const currentNotFriendData = notFriendDataMocks.find(
      (item) => item.id === friendId,
    );

    if (currentNotFriendData) {
      setIsFriendPresent(true);
      setRequestFriendName(currentNotFriendData.name);
    }
  };

  return (
    <Dialog
      title='친구 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='친구 추가'
      onConfirm={handleRequestFriend}
    >
      <div className='mb_10'>
        <p>친구 ID 검색</p>
      </div>
      <div className='d_flex gap_6'>
        <DialogInput
          placeholder='친구의 ID를 검색하세요'
          value={friendId}
          setValue={(e) => {
            setIsFriendPresent(false);
            setFriendId(e.target.value);
          }}
        />
        <Button onClick={handleSearchFriend}>
          <Search size={16} />
        </Button>
      </div>
    </Dialog>
  );
};

export default AddFriendDialog;
