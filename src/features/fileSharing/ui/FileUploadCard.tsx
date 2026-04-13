import { Progress } from '@shared/components/ui';
import FileIcon from './FileIcon';
import styles from './FileUploadCard.module.css';
import { useState } from 'react';

interface FileUploadCardProps {
  fileName?: string;
  fileSize?: string;
}

const FileUploadCard = ({ fileName, fileSize }: FileUploadCardProps) => {
  const [progress] = useState(20);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info_contents}>
          <FileIcon />
          <div>
            <p>{fileName}</p>
            <p style={{ fontSize: '15px', color: '#555' }}>{`${fileSize}`}</p>
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
