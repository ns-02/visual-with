import styles from './DirectChatLayout.module.css';
import { useDirectChatStore } from '../store/useDirectChatStore';

const RightFileListArea = () => {
  const isAreaOpen = useDirectChatStore((state) => state.isAreaOpen);

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
