import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import ChatFooter from '../../../components/ChatFooter';
import './Section.css'

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onClick2: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function ChatBottom({ chat, setChat, onClick2, onKeyDown }: Prop) {
  return (
    <div className="chat-bottom">
      <ChatFooter 
        button1='' icon1={Plus} onClick1={() => {}}
        button2='' icon2={Send} onClick2={onClick2} chat={chat} setChat={setChat}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
  )
}

export default ChatBottom;