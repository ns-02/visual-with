import DragAndDrop from '../components/DragAndDrop';
import FileListCard from '../components/FileListCard';
import styles from './FileSharingSection.module.css'

function BottomSection() {
  const fileItems = [
    { id: 1, fileName: '이미지.png', date: '2025.10.15', fileSize: '2.4MB', timeAgo: '3일 전', uploader: '김철수' },
    { id: 2, fileName: '동영상.mp4', date: '2025.10.12', fileSize: '45.2MB', timeAgo: '5일 전', uploader: '김철수' },
    { id: 3, fileName: '보고서.pdf', date: '2025.10.10', fileSize: '1.8MB', timeAgo: '8일 전', uploader: '이영희' },
  ];

  return (
    <div className={styles.bottom}>
      <DragAndDrop />
      {/* <div className="upload">
        업로드 중
      </div> */}
      <div style={{ marginTop: "24px", marginBottom: "12px" }}>
        파일 목록
      </div>
      {
        fileItems.map((item) => {
          return (
            <FileListCard fileName={item.fileName} date={item.date} fileSize={item.fileSize} timeAgo={item.timeAgo} uploader={item.uploader} />
          )
        })
      }
    </div>
  )
}

export default BottomSection;