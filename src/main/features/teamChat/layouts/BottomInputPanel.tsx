import { KeyboardEvent, useState } from 'react';
import { Plus, Send } from 'lucide-react';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import FileUploadDropdown from '../ui/FileUploadDropdown';
import styles from './TeamChatLayout.module.css';

interface BottomInputPanelProps {
  onSend: (chat: string) => void;
}

function BottomInputPanel({ onSend }: BottomInputPanelProps) {
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
    <Button className={`${styles.button} ${styles.button_secondary}`}>
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
      <Button
        className={`${styles.button} ${styles.button_primary}`}
        onCustomClick={handleSend}
      >
        <Send size={20} />
      </Button>
    </div>
  );
}

export default BottomInputPanel;
