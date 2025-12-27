import { useAreaOpen } from '@core/contexts/AreaOpenContext';
import styles from './DirectChatLayout.module.css';

const RightFileListArea = () => {
  const { isDirectChatFileAreaOpen } = useAreaOpen();

  if (!isDirectChatFileAreaOpen) {
    return null;
  }

  return (
    <div className={styles.right_file_list_area}>
      <div>파일 목록 영역입니다.</div>
    </div>
  );
};

export default RightFileListArea;
