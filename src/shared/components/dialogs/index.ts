import type { Dispatch, ReactNode, SetStateAction } from 'react';

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
  children?: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
}

export type Prop = {
  children?: ReactNode;
};
