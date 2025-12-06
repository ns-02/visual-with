import React from 'react';
import { ChatItem } from '@models/Chat';
import styles from './MessageList.module.css';
import { getDate } from '@utils/dateUtils';

interface MessageListProps {
  allChat: ChatItem[];
}
const MessageList = React.memo(({ allChat }: MessageListProps) => {
  const { year, month, day } = getDate();

  return (
    <div className={styles.view}>
      <div className={styles.contents}>
        <p style={{ textAlign: 'center' }}>{`${year}년 ${month}월 ${day}일`}</p>
        {allChat.map((chatItem) => {
          return (
            <div key={chatItem.id}>
              <p className={styles.chat_time}>{chatItem.time}</p>
              <div className={styles.chat_bubble}>
                <p className={styles.chat_text}>{chatItem.chat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default MessageList;
