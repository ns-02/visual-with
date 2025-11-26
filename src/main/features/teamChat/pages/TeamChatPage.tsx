import { useEffect, useState } from "react";
import { useTeam } from "../../../../context/TeamContext";
import TeamChatBottom from "../section/TeamChatBottom";
import ChatView from "../../../../components/ChatView";
import { getItem, setItem } from "../../../../utils/sessionStorage";
import styles from './TeamChatPage.module.css'
import { ChatItem } from "../../../../types/Chat";

function TeamChatPage() {
  const { selectTeamData } = useTeam();

  const initChats: ChatItem[] = getItem(`teamChats_${selectTeamData?.id}`, "") || [];
  const maxId = initChats.length > 0 
    ? Math.max(...initChats.map(item => item.id)) 
    : 0;

  const [ allChat, setAllChat ] = useState(initChats);
  const [ currentId, setCurrentId ] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
  }, [selectTeamData]);

  const handleSend = (chatToSend: string) => {
    if (!selectTeamData?.id) return;    

    let today = new Date();
    let time = (today.toLocaleTimeString().slice(0, -3));

    const nextChat: ChatItem[] = [
      ...allChat, { id: currentId, chat: chatToSend, time }
    ];

    setItem(`teamChats_${selectTeamData?.id}`, JSON.stringify(nextChat));
    setAllChat(nextChat);
    setCurrentId(currentId + 1);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ChatView allChat={allChat} />
      </div>
      <TeamChatBottom
        onSend={handleSend}
      />
    </div>
  )
}

export default TeamChatPage;
