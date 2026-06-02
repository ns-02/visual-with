import ChatInputArea from '@shared/components/ChatInputArea';
import { useTeamChatThread } from '../hooks/useTeamChatThread';
import styles from './TeamChatLayout.module.css';
import MessageList from '@shared/components/MessageList';
import { useTeamFileManager } from '@features/fileSharing/hooks/useTeamFileManager';

import { useEffect, useRef, useState } from 'react';
import { Client } from '@stomp/stompjs';
import { useTeamId } from '@core/hooks/useWorkspaceParams';

interface ChatMessage {
  senderId: string;
  content: string;
}

const useMockChat = (teamId: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://localhost:8080',

      onConnect: () => {
        console.log('STOMP 연결됨');

        client.subscribe(`/topic/chat/${teamId}`, (message) => {
          const body = JSON.parse(message.body) as ChatMessage;
          setMessages((prev) => [...prev, body]);
        });
      },

      onDisconnect: () => console.log('STOMP 연결 끊김'),
      onStompError: (frame) => console.error('STOMP 오류:', frame),
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [teamId]);

  const sendMessage = (content: string) => {
    clientRef.current?.publish({
      destination: `/app/chat/${teamId}`,
      body: JSON.stringify({ senderId: 'me', content }),
    });
  };

  return { messages, sendMessage };
};

function TeamChatPage() {
  const { allChat, handleTeamChatSend } = useTeamChatThread();
  const { loadAndUploadFile } = useTeamFileManager();
  const teamId = useTeamId();
  const { messages, sendMessage } = useMockChat(teamId ?? '');
  const [value, setValue] = useState('');

  return (
    <div className={styles.team_chat_root}>
      {/* <div className={styles.team_chat_panel}>
        <MessageList allChat={allChat} />
      </div>

      <ChatInputArea
        itemClassName={styles.bottom}
        onSend={handleTeamChatSend}
        onUpload={loadAndUploadFile}
      /> */}
      <div>{JSON.stringify(messages)};</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          sendMessage(value);
          setValue('');
        }}
      >
        전송
      </button>
    </div>
  );
}

export default TeamChatPage;
