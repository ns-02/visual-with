import { ChangeEventHandler, Dispatch, RefObject, SetStateAction } from "react";

export interface UploadFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export interface FileListCardProps {
  fileName?: string;
  date?: string;
  fileSize?: string;
  timeAgo?: string;
  uploader?: string;
};

export interface FileInputProps {
  ref: RefObject<HTMLInputElement | null>;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export interface FileSelectButtonProps {
  text?: string;
  onClick?: () => void;
};
