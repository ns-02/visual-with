import useChatThread from '@shared/chat/useChatThread';
import { ChatItem } from '@shared/models/Chat';

const useDirectChatThread = (allChat: ChatItem[]) => {
  useChatThread(allChat);
};

export default useDirectChatThread;
