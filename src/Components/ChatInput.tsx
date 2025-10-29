import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus } from 'lucide-react';
import Button from "./ui/Button";
import Input from "./ui/Input";
import "./ChatInput.css";

interface FooterProps {
  button: string | undefined;
  onClick: () => void | undefined;
  icon: typeof Plus;
  chat: string;
  setChat: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput: React.FC<FooterProps> = ({
  button, onClick, icon, chat, setChat, onKeyDown 
}) => {
  return (
    <div className="chat-footer">
      <Input chat={chat} setChat={setChat} onKeyDown={(e) => onKeyDown(e)} />
      {
        onClick && <Button text={button} onClick={onClick} icon={icon} />
      }
    </div>
  )
}

export default ChatInput;