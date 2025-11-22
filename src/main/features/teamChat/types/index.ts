import { Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface TeamChatBottomProps {
  setChat: Dispatch<SetStateAction<string>>;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId: number;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
};