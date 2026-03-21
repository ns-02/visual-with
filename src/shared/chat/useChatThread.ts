import { useUserStore } from '@core/store/useUserStore';
import { ChatItem } from '@shared/models/Chat';
import { setItem } from '@shared/utils/sessionStorage';

export const useChatThread = (
  allChat: ChatItem[],
  setAllChat: (chat: ChatItem[]) => void,
  currentId: number,
  setCurrentId: (id: number) => void,
  id: string,
) => {
  const userId = useUserStore((state) => state.userId);
  const userName = useUserStore((state) => state.userName);

  const handleSend = (chatToSend: string) => {
    if (!userId) return;
    if (!userName) return;

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const createdAt = `${year}-${month}-${day}`;
    const time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      {
        id: currentId,
        chat: chatToSend,
        time,
        authorId: userId,
        authorName: userName,
        isMe: true,
        createdAt,
      },
    ];
    setItem(id, JSON.stringify(nextChat));
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  return { handleSend };
};
