import React from "react";
import './ChatView.css'

type ChatItem = {
  chat: string;
  time: string;
};

type Props = {
  allChat: ChatItem[];
};

const ChatView = React.memo(({ allChat }: Props) => {
  return (
    <div className="chat-view">
      <div className="chat-contents">
        {
          allChat.map((chatItem, index) => {
            return (
              <div key={index}>
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