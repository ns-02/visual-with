import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog } from '@shared/components';
import { useTeamFileManager } from '../hooks/useTeamFileManager';
import { useTeamFileStore } from '../store/useTeamFileStore';

interface UploadFileDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const UploadFileDialog = ({ open, onOpenChange }: UploadFileDialogProps) => {
  const { loadAndUploadFile } = useTeamFileManager();
  const isLoading = useTeamFileStore((state) => state.isLoading);
  const [file, setFile] = useState<File>();

  const handleUploadFile = () => {
    if (!file || isLoading) return;

    onOpenChange(false);
    void loadAndUploadFile(file);
    setFile(undefined);
  };

  return (
    <Dialog
      title='파일 업로드'
      open={open}
      onOpenChange={onOpenChange}
      confirmText={isLoading ? '업로드 중...' : '업로드'}
      onConfirm={handleUploadFile}
    >
      <div className='mb_10'>
        <p>파일 선택</p>
      </div>

      <input
        name='input'
        type='file'
        disabled={isLoading}
        autoComplete='off'
        className='dialog_input'
        placeholder='팀원의 ID를 검색하세요'
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      />
    </Dialog>
  );
};

export default UploadFileDialog;
