import { useState } from 'react';
import styles from './FileSharingLayout.module.css';
import DragAndDrop from '../ui/DragAndDrop';
import FileUploadCard from '../ui/FileUploadCard';
import FileListCard from '../ui/FileListCard';
import { useFileStore } from '../store/useFileStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import FileNavButton from '../ui/FileNavButton';

function FileSharingPage() {
  const [fileTypes, setFileTypes] = useState<string>('all');
  const fileData = useFileStore((state) => state.fileData);
  const isLoading = useFileStore((state) => state.isLoading);
  const { teamId } = useWorkspaceParams();

  const fileNavItemsInit = [
    { id: 'all', text: '전체', selected: true },
    { id: 'images', text: '이미지', selected: false },
    { id: 'videos', text: '동영상', selected: false },
    { id: 'audios', text: '오디오', selected: false },
    { id: 'others', text: '기타', selected: false },
  ];

  const [fileNavItems, setFileNavItems] = useState(fileNavItemsInit);

  const handleButtonClick = (id: string) => {
    const nextNavItems = fileNavItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFileNavItems(nextNavItems);
    setFileTypes(id);
  };

  return (
    <div className={styles.file_sharing_root}>
      <div className={styles.top_files}>
        {fileNavItems.map((item) => (
          <FileNavButton
            key={item.id}
            text={item.text}
            selected={item.selected}
            onClick={() => handleButtonClick(item.id)}
          />
        ))}
      </div>

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
    </div>
  );
}

export default FileSharingPage;
