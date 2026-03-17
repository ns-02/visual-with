import { useUser } from '@core/contexts';
import { ChatItem } from '@shared/models/Chat';
import { setItem } from '@shared/utils/sessionStorage';

const useChatThread = (
  allChat: ChatItem[],
  setAllChat: (chat: ChatItem[]) => void,
  currentId: number,
  setCurrentId: (id: number) => void,
  id: string,
) => {
  const { userId, userName } = useUser();

  const handleSend = (chatToSend: string) => {
    if (!userId) return;
    if (!userName) return;

    let today = new Date();
    let time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      {
        id: currentId,
        chat: chatToSend,
        time,
        authorId: userId,
        authorName: userName,
        isMe: true,
      },
    ];
    setItem(id, JSON.stringify(nextChat));
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  const isMyMessage = () => {
    // 어느 시점에서 호출되어야 하는가?
    // 1. 채팅 페이지 전체가 새로 그려질 때
    // 2. 다른 사용자가 채팅을 전송했을 때
    const nextChat: ChatItem[] = allChat.map((chat) =>
      chat.authorId !== userId
        ? {
            ...chat,
            isMe: false,
          }
        : chat,
    );
    setAllChat(nextChat);
  };

  return { handleSend, isMyMessage };
};

export default useChatThread;
