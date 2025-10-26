import { Plus } from 'lucide-react';
import Button from "./ui/Button";
import Input from "./ui/Input";
import "./ChatFooter.css";

interface FooterProps {
  button1: string | undefined;
  onClick1?: () => void | undefined;
  icon1?: typeof Plus;
  button2: string | undefined;
  onClick2?: () => void | undefined;
  icon2?: typeof Plus;
}

const ChatFooter: React.FC<FooterProps> = ({ button1, onClick1, icon1, button2, onClick2, icon2 }) => {
  return (
    <div className="chat-footer">
      {
        onClick1 && <Button text={button1} onClick={onClick1} icon={icon1} />
      }
      <Input />
      {
        onClick2 && <Button text={button2} onClick={onClick2} icon={icon2} />
      }
    </div>
  )
}

export default ChatFooter;