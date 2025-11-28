import DragAndDrop from '../components/DragAndDrop';
import FileListCard from '../components/FileListCard';
import { BottomSectionProps } from '../types';
import styles from './FileSharingSection.module.css';

function BottomSection({ fileTypes }: BottomSectionProps) {
  const fileItems = [
    {
      id: 1,
      fileName: '이미지.png',
      date: '2025.10.15',
      fileSize: '2.4MB',
      timeAgo: '3일 전',
      uploader: '김철수',
      fileType: 'images',
    },
    {
      id: 2,
      fileName: '동영상.mp4',
      date: '2025.10.12',
      fileSize: '45.2MB',
      timeAgo: '5일 전',
      uploader: '김철수',
      fileType: 'movies',
    },
    {
      id: 3,
      fileName: '보고서.pdf',
      date: '2025.10.10',
      fileSize: '1.8MB',
      timeAgo: '8일 전',
      uploader: '이영희',
      fileType: 'others',
    },
  ];

  return (
    <div className={styles.bottom}>
      <DragAndDrop />
      <div style={{ marginTop: '24px', marginBottom: '12px' }}>파일 목록</div>
      {fileItems
        .filter((item) => {
          return fileTypes === 'all' ? item : item.fileType === fileTypes;
        })
        .map((item) => {
          return (
            <FileListCard
              key={item.id}
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
