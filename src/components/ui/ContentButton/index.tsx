import styles from './ContentButton.module.css';

interface ContentButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const ContentButton = ({ children, onClick }: ContentButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ContentButton;
