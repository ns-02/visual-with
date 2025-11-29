import { FileSelectButtonProps } from '..';
import styles from './FileSelectButton.module.css';

const FileSelectButton = ({ text, onClick }: FileSelectButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default FileSelectButton;
