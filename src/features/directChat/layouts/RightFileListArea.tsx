import styles from './DirectChatLayout.module.css';
import { useAreaOpenStore } from '../store/useAreaOpenStore';

const RightFileListArea = () => {
  const isAreaOpen = useAreaOpenStore((state) => state.isAreaOpen);

  if (!isAreaOpen) {
    return null;
  }

  return (
    <div className={styles.right_file_list_area}>
      <div>파일 목록 영역입니다.</div>
    </div>
  );
};

export default RightFileListArea;
