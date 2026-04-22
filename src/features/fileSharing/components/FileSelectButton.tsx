import styles from './FileSelectButton.module.css';

const FileSelectButton = ({
  text,
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default FileSelectButton;
