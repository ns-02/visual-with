import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Dialog } from '@shared/components';

interface RenameFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  fileId: number;
  currentFileName: string;
  renameFile: (fileId: number, newFileName: string) => Promise<boolean>;
}

const RenameFileDialog = ({
  open,
  onOpenChange,
  fileId,
  currentFileName,
  renameFile,
}: RenameFileDialogProps) => {
  const [fileName, setFileName] = useState(currentFileName);
  const [isSaving, setIsSaving] = useState(false);
  const pending = useRef(false);

  const handleRename = async () => {
    const newFileName = fileName.trim();
    if (!newFileName || pending.current) return;
    if (newFileName === currentFileName) {
      onOpenChange(false);
      return;
    }
    pending.current = true;
    setIsSaving(true);
    try {
      if (await renameFile(fileId, newFileName)) onOpenChange(false);
    } finally {
      pending.current = false;
      setIsSaving(false);
    }
  };

  return (
    <Dialog
      title='파일 이름 변경'
      open={open}
      onOpenChange={onOpenChange}
      confirmText={isSaving ? '변경 중...' : '확인'}
      onConfirm={handleRename}
    >
      <p className='mb_10'>현재 파일명: {currentFileName}</p>
      <label htmlFor={`rename-file-${fileId}`}>새 파일명</label>
      <input
        id={`rename-file-${fileId}`}
        className='dialog_input'
        value={fileName}
        onChange={(event) => setFileName(event.target.value)}
        disabled={isSaving}
        required
        autoComplete='off'
      />
    </Dialog>
  );
};

export default RenameFileDialog;
