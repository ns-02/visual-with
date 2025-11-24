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
  const [ chat, setChat ] = useState("");
  const [ clearId, setClearId ] = useState(1);
  const [ currentId, setCurrentId ] = useState(maxId + 1);

  useEffect(() => {
    setAllChat(initChats);
  }, [selectTeamData]);

  const onSend = () => {
    if (!chat) {
      return;
    }

    let today = new Date();
    let time = (today.toLocaleTimeString().slice(0, -3));

    const nextChat: ChatItem[] = [
      ...allChat, { id: currentId, chat, time }
    ];

    setItem(`teamChats_${selectTeamData?.id}`, JSON.stringify(nextChat));
    setAllChat(nextChat);
    setChat("");
    setCurrentId(currentId + 1);
    reset();   
  };

  const reset = () => {
    setClearId(clearId + 1);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ChatView allChat={allChat} />
      </div>
      <TeamChatBottom
        setChat={setChat}
        onClick={onSend}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        clearId={clearId}
      />
    </div>
  )
}

export default TeamChatPage;
