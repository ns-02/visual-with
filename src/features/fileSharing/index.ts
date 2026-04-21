export { default as DragAndDrop } from './components/DragAndDrop';
export { default as FileListCard } from './components/FileListCard';
export { default as FileSelectButton } from './components/FileSelectButton';
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
