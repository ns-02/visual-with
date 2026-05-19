import { FileText } from 'lucide-react';
import styles from './FileIcon.module.css';

const FileIcon = () => {
  return (
    <div className={styles.file_icon}>
      <FileText size={24} />
    </div>
  );
};

export default FileIcon;
