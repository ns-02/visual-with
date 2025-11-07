import React from "react";
import styles from './ChatView.module.css'

type ChatItem = {
  chat: string;
  time: string;
};

type Props = {
  allChat: ChatItem[];
};

const ChatView = React.memo(({ allChat }: Props) => {
  return (
    <div className={styles.view}>
      <div className={styles.contents}>
        {
          allChat.map((chatItem, index) => {
            return (
              <div key={index}> {/* 이거 가능한 한 빨리 수정해야 함.. */}
                <p>{chatItem.chat}</p>
                <p>[ {chatItem.time} ]</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
});

export default ChatView;