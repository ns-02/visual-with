import styles from './FileNavButton.module.css';

const FileNavButton = ({
  text,
  selected,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick?: () => void;
}) => {
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
