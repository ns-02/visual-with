import React, { Dispatch, SetStateAction } from 'react';

export default interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  viewButton?: boolean;
  children?: React.ReactNode;
  confirmButton?: React.ReactNode;
}
