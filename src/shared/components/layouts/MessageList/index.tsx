import { memo } from 'react';
import { ChatItem } from '@shared/models/Chat';
import { Avatar } from '@shared/components/ui';
import styles from './MessageList.module.css';

interface MessageListProps {
  allChat: ChatItem[];
}
const MessageList = memo(({ allChat }: MessageListProps) => {
  console.log(allChat);
  const formatDate = (createdAt: string): string => {
    const parts = createdAt.split('-');
    const resultFormat = `${parts[0]}년 ${Number(parts[1])}월 ${Number(parts[2])}일`;

    return resultFormat;
  };

  return (
    <div className={styles.view}>
      <div className={styles.contents}>
        {allChat.map((chatItem, idx) => {
          const prev = allChat[idx - 1];
          const showDateDivider =
            !prev || prev.createdAt !== chatItem.createdAt;

          return (
            <div key={chatItem.id}>
              {showDateDivider && (
                <p className={styles.date_divider}>
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
