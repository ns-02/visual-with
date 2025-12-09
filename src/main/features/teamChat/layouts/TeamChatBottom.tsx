import { KeyboardEvent, useState } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import styles from './TeamChatBottom.module.css';
import FileUploadDropdown from '../ui/FileUploadDropdown';
import { TeamChatBottomProps } from '..';

function TeamChatBottom({ onSend }: TeamChatBottomProps) {
  const [chat, setChat] = useState('');

  const handleSend = () => {
    if (!chat) return;
    onSend(chat);
    setChat('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const triggerElement = (
    <Button className={styles.button}>
      <Plus size={20} />
    </Button>
  );

  return (
    <div className={styles.bottom}>
      <FileUploadDropdown triggerElement={triggerElement} />
      <Input
        className={styles.input}
        value={chat}
        placeholder='채팅 입력'
        sizeMode='flexible'
        setChat={setChat}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button className={styles.button} onCustomClick={handleSend}>
        <Send size={20} />
      </Button>
    </div>
  );
}

export default TeamChatBottom;
