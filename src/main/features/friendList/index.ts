import React, { Dispatch, SetStateAction } from 'react';

export interface AddFriendDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export interface FriendListCardProps {
  name?: string;
  description?: string;
  onAccept?: () => void;
  onReject?: () => void;
}

export interface FriendListLabelProps {
  text?: string;
  count?: number;
  children?: React.ReactNode;
}
