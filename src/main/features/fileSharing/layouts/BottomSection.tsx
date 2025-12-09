import { useFile } from '@context/FileContext';
import DragAndDrop from '../ui/DragAndDrop';
import FileListCard from '../ui/FileListCard';
import styles from './FileSharingLayout.module.css';

interface BottomSectionProps {
  fileTypes: string;
}

function BottomSection({ fileTypes }: BottomSectionProps) {
  const { fileData } = useFile();

  return (
    <div className={styles.bottom}>
      <DragAndDrop />
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>파일 목록</div>
      {fileData
        .filter((item) => {
          return fileTypes === 'all' ? item : item.fileType === fileTypes;
        })
        .map((item) => {
          return (
            <FileListCard
              key={item.id}
              id={item.id}
              fileName={item.fileName}
              date={item.date}
              fileSize={item.fileSize}
              timeAgo={item.timeAgo}
              uploader={item.uploader}
            />
          );
        })}
    </div>
  );
}

export default BottomSection;
