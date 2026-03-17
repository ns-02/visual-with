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
import { useEffect } from 'react';

function DirectChatPage() {
  const { allChat, handleDirectChatSend, isMyMessage } = useDirectChatThread();

  useEffect(() => {
    isMyMessage();
  }, [allChat]);

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
