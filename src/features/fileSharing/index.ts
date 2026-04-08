export { default as DragAndDrop } from './ui/DragAndDrop';
export { default as FileListCard } from './ui/FileListCard';
export { default as FileSelectButton } from './ui/FileSelectButton';
export { useFileStore } from './store/useFileStore';

// export type FileType = 'all' | 'images' | 'movies' | 'audios' | 'others';

export interface FileSelectButtonProps {
  text?: string;
  onClick?: () => void;
}

export interface FileNavButtonProps {
  text: string;
  selected: boolean;
  onClick?: () => void;
}
