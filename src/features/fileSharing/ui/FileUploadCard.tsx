import { Progress } from '@shared/components/ui';
import FileIcon from './FileIcon';
import styles from './FileUploadCard.module.css';
import { useFileStore } from '../store/useFileStore';

const FileUploadCard = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const progress = useFileStore((state) => state.progress);

  return (
    <div className={styles.container}>
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
        <div className={styles.navigation}>
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
