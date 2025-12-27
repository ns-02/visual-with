import { FileNavButtonProps } from '..';
import styles from './FileNavButton.module.css';

const FileNavButton = ({ text, selected, onClick }: FileNavButtonProps) => {
  return (
    <button
      className={`${styles.button} ${selected && styles.selected}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FileNavButton;
