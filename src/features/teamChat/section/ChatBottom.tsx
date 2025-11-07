import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import './Section.css'

type Prop = {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
}

function ChatBottom({ setChat, onClick, onKeyDown, clearId }: Prop) {
  return (
    <div className="chat-bottom">
      <Button icon={Plus} iconSize={16} />
      <Input setChat={setChat} onKeyDown={(e) => onKeyDown(e)} clearId={clearId} />
      <Button onCustomClick={onClick} icon={Send} iconSize={16} />
    </div>
  )
}

export default ChatBottom;