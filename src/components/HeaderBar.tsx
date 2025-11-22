import { Plus, Search } from 'lucide-react';
import Button from "./ui/Button";
import Input from './ui/Input';
import styles from "./HeaderBar.module.css";

interface HeaderProps {
  label: string;
  button?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  inputIcon?: React.ReactNode;
}

const HeaderBar: React.FC<HeaderProps> = ({ label, button, onClick, children, inputIcon }) => {
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.rsection}>
        <Input placeholder='검색' sizeMode='fixed'>{inputIcon}</Input>
        {
          button && onClick &&
          <Button text={button} onCustomClick={onClick}>
            {children}
          </Button>
        }
      </div>
    </div>
  )
}

export default HeaderBar;