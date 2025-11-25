import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { ChatItem } from "../../../../types/Chat";
import { FriendData } from "../../../../types/Friend";

export interface FriendItem extends FriendData {
  chat: string;
  selected: boolean;
}

export interface DirectChatItem extends ChatItem {

};

export interface DirectChatBottomProps {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
};

export interface LeftFriendProps {
  onSelect?: (value: number) => void;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
};

export interface SelectFriendCardProps {
  name?: string;
  chat?: string;
  selected?: boolean;
  onSelect?: () => void;
};

export type Prop = {
  children: React.ReactNode;
};

