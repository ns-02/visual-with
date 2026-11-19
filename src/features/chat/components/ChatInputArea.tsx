import { Button, Input } from '@shared/components';
import { Plus, Send } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';
import styles from './ChatInputArea.module.css';
import { FileUploadDropdown } from '@features/file';

function ChatInputArea({
  itemClassName,
  onSend,
  onUpload,
  value,
  onChange,
}: {
  itemClassName: string;
  onSend: (chat: string) => void;
  onUpload: (file: File | undefined) => Promise<void>;
  value?: string;
  onChange?: (chat: string) => void;
}) {
  const [localChat, setLocalChat] = useState('');
  const chat = value ?? localChat;

  const handleSend = () => {
    if (!chat) return;
    onSend(chat);
    if (value === undefined) setLocalChat('');
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
    <div className={itemClassName}>
      <FileUploadDropdown triggerElement={triggerElement} onUpload={onUpload} />
      <Input
        className={styles.input}
        value={chat}
        placeholder='채팅 입력'
        sizeMode='flexible'
        onChange={onChange ?? setLocalChat}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button
        className={`${styles.button} ${styles.button_primary}`}
        onClick={handleSend}
      >
        <Send size={20} />
      </Button>
    </div>
  );
}

export default ChatInputArea;
