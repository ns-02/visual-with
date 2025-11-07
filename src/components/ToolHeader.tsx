import { Plus } from 'lucide-react';
import Button from "./ui/Button";
import InputSearch from "./ui/InputSearch";
import styles from "./ToolHeader.module.css";

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
        <InputSearch />
        {
          button && onClick && <Button text={button} onCustomClick={onClick} icon={icon} />
        }
      </div>
    </div>
  )
}

export default ToolHeader;