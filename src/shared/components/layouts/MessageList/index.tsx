import React from 'react';
import { ChatItem } from '@shared/models/Chat';
import { Avatar } from '@shared/components/ui';
import styles from './MessageList.module.css';

interface MessageListProps {
  allChat: ChatItem[];
}
const MessageList = React.memo(({ allChat }: MessageListProps) => {
  let prevDate = '';

  const formatDate = (createdAt: string): string => {
    prevDate = createdAt;
    const parts = createdAt.split('-');
    const resultFormat = `${parts[0]}년 ${Number(parts[1])}월 ${Number(parts[2])}일`;

    return resultFormat;
  };

  return (
    <div className={styles.view}>
      <div className={styles.contents}>
        {allChat.map((chatItem) => {
          return (
            <div key={chatItem.id}>
              {prevDate !== chatItem.createdAt && (
                <p style={{ textAlign: 'center' }}>
                  {formatDate(chatItem.createdAt)}
                </p>
              )}
              {chatItem.isMe ? (
                <div className={styles.chat_item_sender}>
                  <Avatar />
                  <div className={styles.chat_item_inner_sender}>
                    <div className={styles.message_header_sender}>
                      <p className={styles.chat_time}>{chatItem.time}</p>
                    </div>
                    <div className={styles.chat_bubble_sender}>
                      <p className={styles.chat_text}>{chatItem.chat}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.chat_item_receiver}>
                  <Avatar />
                  <div className={styles.chat_item_inner_receiver}>
                    <div className={styles.message_header_receiver}>
                      <p className={styles.receiver}>{chatItem.authorName}</p>
                      <p className={styles.chat_time}>{chatItem.time}</p>
                    </div>
                    <div className={styles.chat_bubble_receiver}>
                      <p className={styles.chat_text}>{chatItem.chat}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default MessageList;
