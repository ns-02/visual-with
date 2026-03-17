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
          /**
           * 송신자인지 수신자인지 검사하는 함수가 필요함
           * UserContext로부터 현재 사용자의 id를 받아온 뒤
           * 해당 id와 메시지 사용자의 id를 비교
           * 함수로 계산된 값은 boolean로, true일 경우 송신자의 UI가 출력되며
           * false일 경우 수신자의 UI가 보여져야 함
           * 송신자(나)의 별도 UI를 구분해야 함
           */
          return (
            <div key={chatItem.id} className={styles.chat_item}>
              <Avatar />
              <div>
                <div className={styles.message_header}>
                  <p className={styles.receiver}>{chatItem.authorName}</p>
                  <p className={styles.chat_time}>{chatItem.time}</p>
                </div>
                <div className={styles.chat_bubble}>
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
