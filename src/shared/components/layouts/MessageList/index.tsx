import React from 'react';
import { ChatItem } from '@shared/models/Chat';
import { getDate } from '@shared/utils/dateUtils';
import { Avatar } from '@shared/components/ui';
import styles from './MessageList.module.css';

interface MessageListProps {
  allChat: ChatItem[];
}
const MessageList = React.memo(({ allChat }: MessageListProps) => {
  const { year, month, day } = getDate();

  return (
    <div className={styles.view}>
      <div className={styles.contents}>
        {/* 이 밑에 있는 것도 수동이라 수정해야 함 */}
        <p style={{ textAlign: 'center' }}>{`${year}년 ${month}월 ${day}일`}</p>
        {allChat.map((chatItem) => {
          if (chatItem.isMe) {
            return (
              <div key={chatItem.id} className={styles.chat_item_sender}>
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
            );
          }

          return (
            <div key={chatItem.id} className={styles.chat_item_receiver}>
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
          );
        })}
      </div>
    </div>
  );
});

export default MessageList;
