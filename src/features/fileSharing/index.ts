import { ChangeEventHandler, Dispatch, RefObject, SetStateAction } from 'react';

export { default as DragAndDrop } from './ui/DragAndDrop';
export { default as FileInput } from './ui/FileInput';
export { default as FileListCard } from './ui/FileListCard';
export { default as FileSelectButton } from './ui/FileSelectButton';

// export type FileType = 'all' | 'images' | 'movies' | 'audios' | 'others';

export interface TopFileNavBarProps {
  onSelect: Dispatch<SetStateAction<string>>;
}

export interface FileInputProps {
  ref: RefObject<HTMLInputElement | null>;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface FileSelectButtonProps {
  text?: string;
  onClick?: () => void;
}

export interface FileNavButtonProps {
  text: string;
  selected: boolean;
  onClick?: () => void;
}
