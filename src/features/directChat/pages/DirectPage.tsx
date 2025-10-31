import { useState } from 'react';
import DirectBottom from '../section/DirectBottom';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import { getItem, setItem } from '../../../utils/sessionStorage';
import './DirectPage.css'
import ChatView from '../../../components/ChatView';

interface ChatItem {
  chat: string,
  time: string,
}

function DirectPage() {
  const initChats: ChatItem[] = getItem('directChats', "") || [];
  
  const [ allChat, setAllChat ] = useState(initChats);
  const [ chat, setChat ] = useState("");

  const onSend = () => {
      if (!chat) {
        return;
      }
  
      let today = new Date();
      let time = (today.toLocaleTimeString().slice(0, -3));
  
      const nextChat: ChatItem[] = [
        ...allChat, { chat, time }
      ];
  
      setItem('directChats', JSON.stringify(nextChat));
      setAllChat(nextChat);
      setChat("");
    };

  return (
    <div className="direct-frame">
      <LeftFriends></LeftFriends>
      <RightChats>
        <div className="direct-container">
          <ChatView allChat={allChat} />
        </div>
        <DirectBottom
          chat={chat}
          setChat={setChat}
          onClick={onSend}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
        />
      </RightChats>
    </div>
  )
}

export default DirectPage;
