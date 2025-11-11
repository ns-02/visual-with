import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import styles from './Section.module.css'

type Prop = {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
}

function DirectBottom({ setChat, onClick, onKeyDown, clearId }: Prop) {
  return (
    <div className={styles.bottom}>
      <Button icon={Plus} iconSize={16} />
      <Input placeholder='채팅 입력' sizeMode='flexible' setChat={setChat} onKeyDown={(e) => onKeyDown(e)} clearId={clearId} />
      <Button onCustomClick={onClick} icon={Send} iconSize={16} />
    </div>
  )
}

export default DirectBottom;