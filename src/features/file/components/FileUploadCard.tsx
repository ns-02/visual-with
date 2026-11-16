import styles from './FileSharingUI.module.css';
import { useTeamFileStore } from '../store/useTeamFileStore';
import { FileText } from 'lucide-react';

const FileUploadCard = () => {
  const currentFile = useTeamFileStore((state) => state.currentFile);

  return (
    <div className='common_card flex_col content_nm'>
      <div className={styles.wrapper}>
        <div className='common_card_info'>
          <div className='file_icon'>
            <FileText size={24} />
          </div>
          <div>
            <p>{currentFile?.fileName}</p>
            <p
              style={{ fontSize: '15px', color: '#555' }}
            >{`${currentFile?.fileSize}`}</p>
          </div>
        </div>
        <div className='common_card_nav px_20'>
          <p role='status'>업로드 중...</p>
        </div>
      </div>
    </div>
  );
};

export default FileUploadCard;
