import { useFile } from '@core/contexts/FileContext';
import DragAndDrop from '../ui/DragAndDrop';
import FileListCard from '../ui/FileListCard';
import styles from './FileSharingLayout.module.css';

interface FileViewPanelProps {
  fileTypes: string;
}

function FileViewPanel({ fileTypes }: FileViewPanelProps) {
  const { fileData } = useFile();

  return (
    <div className={styles.file_view_panel}>
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

export default FileViewPanel;
