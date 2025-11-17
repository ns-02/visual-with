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
              <div key={index} > {/* 이거 가능한 한 빨리 수정해야 함.. */}
                <p style={{ fontSize: "13px", color: "#777" }}>{chatItem.time}</p>
                <div style={{ display: "inline-block", padding: "8px 12px", marginBottom: "8px", borderRadius: "10px",  backgroundColor: "white" }}>
                  <p style={{ display: "inline-block" }} >{chatItem.chat}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
});

export default ChatView;