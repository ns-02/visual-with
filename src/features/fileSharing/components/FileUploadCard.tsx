import styles from './FileSharingUI.module.css';
import { useTeamFileStore } from '../store/useTeamFileStore';
import { FileIcon, Progress } from '@shared/components';

const FileUploadCard = () => {
  const currentFile = useTeamFileStore((state) => state.currentFile);
  const progress = useTeamFileStore((state) => state.progress);

  return (
    <div className={styles.upload_card}>
      <div className={styles.wrapper}>
        <div className={styles.info_contents}>
          <FileIcon />
          <div>
            <p>{currentFile?.fileName}</p>
            <p
              style={{ fontSize: '15px', color: '#555' }}
            >{`${currentFile?.fileSize}`}</p>
          </div>
        </div>
        <div className={styles.upload_nav}>
          <p>{`${progress}%`}</p>
        </div>
      </div>
      <div className={styles.progress_area}>
        <Progress progress={progress} />
      </div>
    </div>
  );
};

export default FileUploadCard;
