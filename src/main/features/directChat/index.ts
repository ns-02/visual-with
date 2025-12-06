import { ChatItem } from '@models/Chat';
import { FriendData } from '@models/Friend';

export { default as LeftFriendsPanel } from './layouts/LeftFriendsPanel';
export { default as ChatViewPanel } from './layouts/ChatViewPanel';
export { default as DirectChatArea } from './layouts/DirectChatArea';
export { default as BottomInputArea } from './layouts/BottomInputArea';

export interface FriendItem extends FriendData {
  chat: string;
  selected: boolean;
}

export interface DirectChatItem extends ChatItem {}

export interface BottomInputAreaProps {
  onSend: (chat: string) => void;
}

// export interface LeftFriendProps {
//   idChatMap: IdChatMap;
// }

export interface DropdownProps {
  triggerElement?: React.ReactNode;
}

export interface SelectFriendCardProps {
  name?: string;
  chat?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export type Prop = {
  children: React.ReactNode;
};
