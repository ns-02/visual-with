import { useUserStore } from '@core/store/useUserStore';
import { ChatData } from '@shared/models/Workspace';

import { formatDate } from '@shared/utils/formatDate';
import { setItem } from '@shared/utils/sessionStorage';

export const useChatThread = (
  allChat: ChatData[],
  setAllChat: (chat: ChatData[]) => void,
  currentId: number,
  setCurrentId: (id: number) => void,
  id: string,
) => {
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);

  const handleSend = (chatToSend: string) => {
    if (!userId) return;
    if (!userName) return;

    const today = new Date();

    const createdAt = formatDate();
    const time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatData[] = [
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
