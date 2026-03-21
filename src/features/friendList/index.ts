import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AddFriendDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export interface FriendListLabelProps {
  text?: string;
  count?: number;
  children?: ReactNode;
}
