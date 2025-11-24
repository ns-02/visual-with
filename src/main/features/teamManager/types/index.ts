import { Dispatch, SetStateAction } from "react";

export interface TeamItem {
  id: number;
  name: string;
}

export interface TeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
  onDelete?: (value: string) => void;
  deleteTeamName?: string;
};

export interface DropdownProps {
  triggerElement?: React.ReactNode;
};