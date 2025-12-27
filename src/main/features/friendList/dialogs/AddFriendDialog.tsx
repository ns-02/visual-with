import { Search } from 'lucide-react';
import { Dialog, Group, DialogInput, Row } from '@shared/components/dialogs';
import { Button } from '@shared/components/ui';
import { AddFriendDialogProps } from '..';
import { useState } from 'react';
import { notFriendDataMocks } from '@mocks/FriendDataMocks';

const AddFriendDialog = ({ open, onOpenChange }: AddFriendDialogProps) => {
  const [friendId, setFriendId] = useState('');
  const [isFriendPresent, setIsFriendPresent] = useState(false);
  const [requestFriendName, setRequestFriendName] = useState('');

  const handleRequestFriend = () => {
    if (!friendId) {
      alert('ID가 입력되지 않았습니다.');
      return;
    }
    if (!isFriendPresent) {
      alert('잘못된 ID이거나, ID를 검색하지 않았습니다.');
      return;
    }

    alert(`${requestFriendName}님께 성공적으로 요청을 보냈습니다.`);

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
      <Group>
        <p>친구 ID 검색</p>
      </Group>
      <Row>
        <DialogInput
          placeholder='친구의 ID를 검색하세요'
          value={friendId}
          setValue={(e) => {
            setIsFriendPresent(false);
            setFriendId(e.target.value);
          }}
        />
        <Button onCustomClick={handleSearchFriend}>
          <Search size={16} />
        </Button>
      </Row>
    </Dialog>
  );
};

export default AddFriendDialog;
