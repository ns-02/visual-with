import styles from './FileSelectButton.module.css';

type Prop = {
  text?: string;
  onClick?: () => void;
}

const FileSelectButton = ({ text, onClick }: Prop) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default FileSelectButton;