import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ChatFooter from '../../../components/ChatInput';
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
      <Button text={''} onClick={() => {}} icon={Plus} />
      <ChatFooter
        button='' icon={Send} onClick={onClick2} chat={chat} setChat={setChat}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
  )
}

export default ChatBottom;