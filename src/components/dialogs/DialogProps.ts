import React, { Dispatch, SetStateAction } from 'react';

export default interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>; 
  title?: string;
  btnName?: string;
  description?: string;
  viewButton?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}