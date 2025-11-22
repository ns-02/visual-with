import { Dispatch, SetStateAction } from "react";

export interface TeamItem {
  id: number;
  text: string;
}

export interface TeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
};