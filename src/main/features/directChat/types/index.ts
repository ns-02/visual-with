import { ChatItem } from '@models/Chat';
import { FriendData } from '@models/Friend';

export interface FriendItem extends FriendData {
  chat: string;
  selected: boolean;
}

export interface DirectChatItem extends ChatItem {}

export interface DirectChatBottomProps {
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
