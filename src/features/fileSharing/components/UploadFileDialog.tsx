import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog } from '@shared/components';
import { useTeamFileManager } from '../hooks/useTeamFileManager';

interface UploadFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  const { loadAndUploadFile } = useTeamFileManager();
  const [file, setFile] = useState<File>();

  const handleUploadFile = () => {
    if (!file) return;

    onOpenChange(false);
    loadAndUploadFile(file);
  };

  return (
    <Dialog
      title='파일 업로드'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='업로드'
      onConfirm={handleUploadFile}
    >
      <div className='mb_10'>
        <p>파일 선택</p>
      </div>

      <input
        name='input'
        type='file'
        autoComplete='off'
        className='dialog_input'
        placeholder='팀원의 ID를 검색하세요'
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      />
    </Dialog>
  );
};

export default UploadFileDialog;
