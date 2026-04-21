import DragAndDrop from '../ui/DragAndDrop';
import FileListCard from '../ui/FileListCard';
import styles from './FileSharingLayout.module.css';
import { useFileStore } from '../store/useFileStore';
import FileUploadCard from '../ui/FileUploadCard';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';

interface FileViewPanelProps {
  fileTypes: string;
}

function FileViewPanel({ fileTypes }: FileViewPanelProps) {
  const fileData = useFileStore((state) => state.fileData);
  const isLoading = useFileStore((state) => state.isLoading);
  const { teamId } = useWorkspaceParams();

  return (
    <div className={styles.file_view_panel}>
      <DragAndDrop />
      {isLoading && (
        <div>
          <div style={{ marginTop: '24px', marginBottom: '12px' }}>
            업로드 중
          </div>
          <FileUploadCard />
        </div>
      )}

      <div style={{ marginTop: '24px', marginBottom: '12px' }}>파일 목록</div>
      {fileData
        .filter((item) => item.teamId === teamId)
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
