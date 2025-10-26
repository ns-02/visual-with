import { Dispatch, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import ChatFooter from '../../../components/ChatFooter';
import './Section.css'

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onSend: () => void;
}

function ChatWrapper({ chat, setChat, onSend }: Prop) {
  return (
    <div className="chat-wrapper">
      <ChatFooter 
        button1='' icon1={Plus} onClick1={() => {}}
        button2='' icon2={Send} onClick2={onSend} chat={chat} setChat={setChat}
      />
    </div>
  )
}

export default ChatWrapper;