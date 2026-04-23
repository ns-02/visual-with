import styles from './FileSharingUI.module.css';

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
      className={`${styles.nav_button} ${selected && styles.selected}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FileNavButton;
