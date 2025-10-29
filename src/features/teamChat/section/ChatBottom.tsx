import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import './Section.css'

type Prop = {
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function ChatBottom({ chat, setChat, onClick, onKeyDown }: Prop) {
  return (
    <div className="chat-bottom">
      <Button text='' onClick={() => {}} icon={Plus} />
      <Input chat={chat} setChat={setChat} onKeyDown={(e) => onKeyDown(e)} />
      <Button text='' onClick={onClick} icon={Send} />
    </div>
  )
}

export default ChatBottom;