import { useDirectChatThread } from '../hooks/useDirectChatThread';
import styles from './DirectChatLayout.module.css';
import MessageList from '@shared/components/MessageList';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useDirectChatStore } from '../store/useDirectChatStore';
import SelectFriendCard from '../components/SelectFriendCard';
import { useEffect, useState } from 'react';
import { FriendData } from '@shared/models/User';
import ChatInputArea from '@shared/components/ChatInputArea';

interface FriendItem extends FriendData {
  chat: string;
  selected: boolean;
}

function DirectChatPage() {
  const selectFriendData = useFriendStore((state) => state.selectFriendData);
  const isAreaOpen = useDirectChatStore((state) => state.isAreaOpen);
  const friendData = useFriendStore((state) => state.friendData);
  const updateSelectFriend = useFriendStore(
    (state) => state.updateSelectFriend,
  );
  const friendIdChatMap = useDirectChatStore((state) => state.friendIdChatMap);
  const { allChat, handleDirectChatSend } = useDirectChatThread();
  const [friendItems, setFriendItems] = useState<FriendItem[]>([]);

  useEffect(() => {
    const nextFriendItems = friendData?.map((data) => {
      return data.id === selectFriendData?.id
        ? { ...data, chat: friendIdChatMap.get(data.id) || '', selected: true }
        : {
            ...data,
            chat: friendIdChatMap.get(data.id) || '',
            selected: false,
          };
    });

    if (nextFriendItems) {
      setFriendItems(nextFriendItems);
    }
  }, [friendData, selectFriendData, friendIdChatMap]);

  const handleCardSelect = (id: string) => {
    const nextFriendItems = friendItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFriendItems(nextFriendItems);
    updateSelectFriend(id);
  };

  return (
    <div className={styles.direct_chat_root}>
      <div className={styles.left_friends_panel}>
        {friendItems.map((item) => {
          return (
            <SelectFriendCard
              key={item.id}
              name={item.name}
              chat={item.chat}
              selected={item.selected}
              onSelect={() => handleCardSelect(item.id)}
            />
          );
        })}
      </div>

      {!selectFriendData ? (
        <div className={styles.chat_view_panel}>
          <div className={styles.overview}>준비 중인 화면입니다</div>
        </div>
      ) : (
        <div className={styles.chat_view_panel}>
          <div className={styles.chat_content_area}>
            <div className={styles.direct_chat_area}>
              <MessageList allChat={allChat} />
            </div>

            {!isAreaOpen ? null : (
              <div className={styles.right_file_list_area}>
                <div>파일 목록 영역입니다.</div>
              </div>
            )}
          </div>
          <ChatInputArea
            itemClassName={styles.bottom_input_area}
            onSend={handleDirectChatSend}
          />
        </div>
      )}
    </div>
  );
}

export default DirectChatPage;
