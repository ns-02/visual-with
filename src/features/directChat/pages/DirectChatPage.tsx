import { useFriend } from '@core/contexts/FriendContext';
import {
  DirectChatRoot,
  LeftFriendsPanel,
  ChatViewPanel,
  ChatContentArea,
  DirectChatArea,
  BottomInputArea,
} from '../';
import RightFileListArea from '../layouts/RightFileListArea';
import useDirectChatThread from '../hooks/useDirectChatThread';

function DirectChatPage() {
  const { selectFriendData, setFriendIdChatMap } = useFriend();
  const { allChat, handleDirectChatSend } = useDirectChatThread(
    selectFriendData?.id,
    setFriendIdChatMap,
  );

  return (
    <DirectChatRoot>
      <LeftFriendsPanel />
      <ChatViewPanel>
        <ChatContentArea>
          <DirectChatArea allChat={allChat} />
          <RightFileListArea />
        </ChatContentArea>
        <BottomInputArea onSend={handleDirectChatSend} />
      </ChatViewPanel>
    </DirectChatRoot>
  );
}

export default DirectChatPage;
