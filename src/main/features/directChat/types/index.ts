import { Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface DirectChatBottomProps {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
};

export interface SelectFriendCardProps {
  name?: string;
  chat?: string;
  selected?: boolean;
};

export type Prop = {
  children: React.ReactNode;
};

