import ChatInputArea from '@shared/components/ChatInputArea';
import { useTeamChatThread } from '../hooks/useTeamChatThread';
import styles from './TeamChatLayout.module.css';
import MessageList from '@shared/components/MessageList';
import { useTeamFileManager } from '@features/fileSharing/hooks/useTeamFileManager';
import { useTeamChatStore } from '../store/useTeamChatStore';
import { useEffect, useRef, useState } from 'react';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { Client } from '@stomp/stompjs';

function TeamChatPage() {
  const { allChat, handleTeamChatSend } = useTeamChatThread();
  const { loadAndUploadFile } = useTeamFileManager();
  const isConnected = useTeamChatStore((state) => state.isConnected);
  const subscribeToTeam = useTeamChatStore((state) => state.subscribeToTeam);
  const unsubscribeFromTeam = useTeamChatStore(
    (state) => state.unsubscribeFromTeam,
  );

  // const [messages, setMessages] = useState<string[]>([]);
  // const [input, setInput] = useState('');
  // const clientRef = useRef<Client | null>(null);

  const teamId = useTeamId();

  useEffect(() => {
    if (!teamId) return;

    if (isConnected) {
      subscribeToTeam(teamId);
    }

    return () => {
      unsubscribeFromTeam();
    };
  }, [subscribeToTeam, unsubscribeFromTeam, teamId, isConnected]);

  // useEffect(() => {
  //   const client = new Client({
  //     brokerURL: 'ws://localhost:8080/ws',
  //   });

  //   client.onConnect = () => {
  //     client.subscribe('/sub/chatroom/1', (msg) => {
  //       console.log('받음', msg.body);
  //     });
  //   };

  //   client.activate();
  //   clientRef.current = client;

  //   return () => {
  //     client.deactivate();
  //   };
  // }, []);

  // const send = () => {
  //   if (!clientRef.current?.connected) return;
  //   clientRef.current.publish({
  //     destination: '/pub/message',
  //     body: JSON.stringify({ id: 1, name: 'kim', message: input }),
  //   });
  //   setInput('');
  // };

  return (
    <div className={styles.team_chat_root}>
      <div className={styles.team_chat_panel}>
        <MessageList allChat={allChat} />
      </div>

      <ChatInputArea
        itemClassName={styles.bottom}
        onSend={handleTeamChatSend}
        onUpload={loadAndUploadFile}
      />

      {/* <div>
        <h2>STOMP Chat Test</h2>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={send}>전송</button>
        <ul>
          {messages.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default TeamChatPage;
