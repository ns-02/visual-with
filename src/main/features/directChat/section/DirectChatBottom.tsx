import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import styles from './DirectChatSection.module.css'
import FileUploadDropdown from '../components/FileUploadDropdown';

type Prop = {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
}

function DirectBottom({ setChat, onClick, onKeyDown, clearId }: Prop) {
  const triggerElement = (
    <Button>
      <Plus size={16} />
    </Button>
  );

  return (
    <div className={styles.bottom}>
      <FileUploadDropdown triggerElement={triggerElement} />
      <Input placeholder='채팅 입력' sizeMode='flexible' setChat={setChat} onKeyDown={(e) => onKeyDown(e)} clearId={clearId} />
      <Button onCustomClick={onClick}>
        <Send size={16}/>
      </Button>
    </div>
  )
}

export default DirectBottom;