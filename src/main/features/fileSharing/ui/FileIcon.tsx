import { FileText } from 'lucide-react';
import styles from './FileIcon.module.css';

const FileIcon = () => {
  return (
    <div className={styles.container}>
      <FileText size={24} />
    </div>
  );
};

export default FileIcon;
