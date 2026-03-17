import { useUser } from '@core/contexts';
import { ChatItem } from '@shared/models/Chat';

const useChatThread = (
  allChat: ChatItem[],
  setAllChat: (chat: ChatItem[]) => void,
  currentId: number,
  setCurrentId: (id: number) => void,
) => {
  const { userName } = useUser();

  const handleSend = (chatToSend: string) => {
    if (!userName) return;

    let today = new Date();
    let time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      { id: currentId, chat: chatToSend, time, author: userName },
    ];
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  return { handleSend };
};

export default useChatThread;
