import { Dispatch, SetStateAction } from "react";

export interface TeamItem {
  id: number;
  text: string;
}

export interface TeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
  onSelect?: (value: string) => void;
};