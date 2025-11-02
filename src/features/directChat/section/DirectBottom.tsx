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

function DirectBottom({ setChat, onClick, onKeyDown, clearId }: Prop) {
  return (
    <div className="direct-bottom">
      <Button text='' onClick={() => {}} icon={Plus} />
      <Input setChat={setChat} onKeyDown={(e) => onKeyDown(e)} clearId={clearId} />
      <Button text='' onClick={onClick} icon={Send} />
    </div>
  )
}

export default DirectBottom;