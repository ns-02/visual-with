import { Plus, Send } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import styles from './DirectChatSection.module.css'
import FileUploadDropdown from '../components/FileUploadDropdown';
import { DirectChatBottomProps } from '../types';

function DirectChatBottom({ setChat, onClick, onKeyDown, clearId }: DirectChatBottomProps) {
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

export default DirectChatBottom;