import { KeyboardEvent, useState } from 'react';
import { Plus, Send } from 'lucide-react';
import { Button, Input } from '@components/ui';
import FileUploadDropdown from '../ui/FileUploadDropdown';
import { DirectChatBottomProps } from '..';
import styles from './DirectChat.module.css';

function DirectChatBottom({ onSend }: DirectChatBottomProps) {
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
    <Button>
      <Plus size={16} />
    </Button>
  );

  return (
    <div className={styles.bottom}>
      <FileUploadDropdown triggerElement={triggerElement} />
      <Input
        value={chat}
        placeholder='채팅 입력'
        sizeMode='flexible'
        setChat={setChat}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button onCustomClick={handleSend}>
        <Send size={16} />
      </Button>
    </div>
  );
}

export default DirectChatBottom;
