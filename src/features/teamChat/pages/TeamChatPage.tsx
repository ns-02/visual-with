import { useEffect, useState } from 'react';
import { useTeam } from '@core/contexts/TeamContext';
import { ChatItem } from '@shared/models/Chat';
import { getItem, setItem } from '@shared/utils/sessionStorage';
import getMaxId from '@shared/utils/getMaxId';
import TeamChatRoot from '../layouts/TeamChatRoot';
import TeamChatPanel from '../layouts/TeamChatPanel';
import TeamChatBottom from '../layouts/BottomInputPanel';

function TeamChatPage() {
  const { selectTeamId } = useTeam();

  const initChats: ChatItem[] = getItem(`teamChats_${selectTeamId}`, '') || [];
  const maxId = getMaxId(initChats);

  const [allChat, setAllChat] = useState(initChats);
  const [currentId, setCurrentId] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
  }, [selectTeamId]);

  const handleSend = (chatToSend: string) => {
    if (!selectTeamId) return;

    let today = new Date();
    let time = today.toLocaleTimeString().slice(0, -3);

    const nextChat: ChatItem[] = [
      ...allChat,
      { id: currentId, chat: chatToSend, time },
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
