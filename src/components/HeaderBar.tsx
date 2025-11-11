import { Plus, Search } from 'lucide-react';
import Button from "./ui/Button";
import Input from './ui/Input';
import styles from "./HeaderBar.module.css";

interface HeaderProps {
  label: string;
  button?: string;
  onClick?: () => void;
  icon?: typeof Plus;
}

const ToolHeader: React.FC<HeaderProps> = ({ label, button, onClick, icon }) => {
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.rsection}>
        <Input placeholder='검색' sizeMode='fixed' icon={Search} iconSize={16} />
        {
          button && onClick && <Button text={button} onCustomClick={onClick} icon={icon} iconSize={16} />
        }
      </div>
    </div>
  )
}

export default ToolHeader;