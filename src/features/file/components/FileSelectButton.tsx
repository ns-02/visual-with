import styles from './FileSharingUI.module.css';

const FileSelectButton = ({
  text,
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={styles.select_button} onClick={onClick}>
      {text}
    </button>
  );
};

export default FileSelectButton;
