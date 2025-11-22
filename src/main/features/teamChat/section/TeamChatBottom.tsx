import { Plus, Send } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import styles from './TeamChatSection.module.css'
import FileUploadDropdown from '../components/FileUploadDropdown';
import { TeamChatBottomProps } from '../types';

function TeamChatBottom({ setChat, onClick, onKeyDown, clearId }: TeamChatBottomProps) {
  const triggerElement = (
    <Button><Plus size={16} /></Button>
  );

  return (
    <div className={styles.bottom}>
      <FileUploadDropdown triggerElement={triggerElement} />
      <Input placeholder='채팅 입력' sizeMode='flexible' setChat={setChat} onKeyDown={(e) => onKeyDown(e)} clearId={clearId} />
      <Button onCustomClick={onClick}>
        <Send size={16} />
      </Button>
    </div>
  )
}

export default TeamChatBottom;