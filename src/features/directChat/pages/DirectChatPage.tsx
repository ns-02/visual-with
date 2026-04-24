import { useDirectChatThread } from '../hooks/useDirectChatThread';
import styles from './DirectChatLayout.module.css';
import MessageList from '@shared/components/MessageList';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useDirectChatStore } from '../store/useDirectChatStore';
import SelectFriendCard from '../components/SelectFriendCard';
import { useEffect, useMemo, useState } from 'react';
import { FriendData } from '@shared/models/User';
import ChatInputArea from '@shared/components/ChatInputArea';
import { useDirectFileManager } from '../hooks/useDirectFileManager';
import { useRouteManager } from '@core/routes/useRouteManager';
import { useFriendId } from '@core/hooks/useWorkspaceParams';
import { useDirectFileStore } from '../store/useDirectFileStore';
import FileListCard from '../components/FileListCard';

interface FriendItem extends FriendData {
  chat: string;
  selected: boolean;
}

function DirectChatPage() {
  const friendId = useFriendId();
  const isAreaOpen = useDirectChatStore((state) => state.isAreaOpen);
  const friendData = useFriendStore((state) => state.friendData);
  const friendIdChatMap = useDirectChatStore((state) => state.friendIdChatMap);
  const fileData = useDirectFileStore((state) => state.fileData);
  const selectFriendFileData = useMemo(
    () => fileData.filter((item) => item.friendId === friendId),
    [fileData, friendId],
  );
  const { allChat, handleDirectChatSend } = useDirectChatThread();
  const { loadAndUploadFile } = useDirectFileManager();
  const [friendItems, setFriendItems] = useState<FriendItem[]>([]);
  const { switchFriend } = useRouteManager();

  useEffect(() => {
    const nextFriendItems = friendData?.map((data) => {
      return data.id === friendId
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
  }, [friendData, friendId, friendIdChatMap]);

  const handleCardSelect = (id: string) => {
    const nextFriendItems = friendItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFriendItems(nextFriendItems);
    switchFriend(id);
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

      {!friendId ? (
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
                <div style={{ marginTop: '24px', marginBottom: '12px' }}>
                  파일 목록
                </div>

                {selectFriendFileData?.map((item) => (
                  <FileListCard
                    key={item.id}
                    id={item.id}
                    fileName={item.fileName}
                    date={item.date}
                    fileSize={item.fileSize}
                    timeAgo={item.timeAgo}
                    authorId={item.authorId}
                    authorName={item.authorName}
                  />
                ))}
              </div>
            )}
          </div>
          <ChatInputArea
            itemClassName={styles.bottom_input_area}
            onSend={handleDirectChatSend}
            onUpload={loadAndUploadFile}
          />
        </div>
      )}
    </div>
  );
}

export default DirectChatPage;
