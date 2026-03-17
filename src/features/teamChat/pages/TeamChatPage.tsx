import { useEffect, useState } from 'react';
import { useTeam } from '@core/contexts/TeamContext';
import { ChatItem } from '@shared/models/Chat';
import { getItem, setItem } from '@shared/utils/sessionStorage';
import getMaxId from '@shared/utils/getMaxId';
import TeamChatRoot from '../layouts/TeamChatRoot';
import TeamChatPanel from '../layouts/TeamChatPanel';
import TeamChatBottom from '../layouts/BottomInputPanel';
import { useUser } from '@core/contexts';

function TeamChatPage() {
  const { selectTeamId } = useTeam();
  const { userName } = useUser(); // 나중에 nickName으로 수정해야 함

  const initChats: ChatItem[] = getItem(`teamChats_${selectTeamId}`, '') || [];
  let maxId = getMaxId(initChats);

  const [allChat, setAllChat] = useState(initChats);
  const [currentId, setCurrentId] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
    maxId = getMaxId(initChats);
    setCurrentId(maxId + 1);
  }, [selectTeamId]);

  const handleSend = (chatToSend: string) => {
    if (!selectTeamId) return;
    if (!userName) return;

    let today = new Date();
    let time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      { id: currentId, chat: chatToSend, time, author: userName },
    ];

    setItem(`teamChats_${selectTeamId}`, JSON.stringify(nextChat));
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  return (
    <TeamChatRoot>
      <TeamChatPanel allChat={allChat} />
      <TeamChatBottom onSend={handleSend} />
    </TeamChatRoot>
  );
}

export default TeamChatPage;
