import { useEffect, useState } from 'react';
import { MessageList } from '@components/ui';
import { useTeam } from '@context/TeamContext';
import { ChatItem } from '@models/Chat';
import { getItem, setItem } from '@utils/sessionStorage';
import TeamChatBottom from '../layouts/TeamChatBottom';
import styles from './TeamChatPage.module.css';
import getMaxId from '@utils/getMaxId';

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
    <div className={styles.page}>
      <div className={styles.container}>
        <MessageList allChat={allChat} />
      </div>
      <TeamChatBottom onSend={handleSend} />
    </div>
  );
}

export default TeamChatPage;
