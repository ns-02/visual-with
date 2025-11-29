import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

export { default as AlertDialog } from './AlertDialog';
export { default as Dialog } from './Dialog/';
export { default as Group } from './Group';
export { default as DialogInput } from './DialogInput';
export { default as Row } from './Row';

export default interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  viewButton?: boolean;
  children?: React.ReactNode;
  confirmButton?: React.ReactNode;
}

export interface InputProps {
  type?: string;
  value?: string;
  setValue?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export type Prop = {
  children?: React.ReactNode;
};
