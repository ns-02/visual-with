import type { Dispatch, ReactNode, SetStateAction } from 'react';

export { default as Container } from './Container';
export { default as HeaderBar } from './HeaderBar';
export { default as AuthInput } from './AuthInput';
export { default as Avatar } from './Avatar';
export { default as Button } from './Button';
export { default as CheckBox, type CheckBoxProps } from './CheckBox';
export { default as FileInput } from './FileInput';
export { default as Input } from './Input';
export { default as Item } from './Item';
export { default as Dropdown } from './Dropdown';
export { default as Progress } from './Progress';
export { default as Tooltip } from './Tooltip';
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
