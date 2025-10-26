import { Plus } from 'lucide-react';
import Button from "./ui/Button";
import InputSearch from "./ui/InputSearch";
import "./ToolHeader.css";

interface HeaderProps {
  label: string;
  button: string;
  onClick: () => void;
  icon?: typeof Plus;
}

const ToolHeader: React.FC<HeaderProps> = ({ label, button, onClick, icon }) => {
  return (
    <div className="tool-header">
      <div className="header-label">
        <span>{label}</span>
      </div>
      <div className="header-r-section">
        <InputSearch />
        <Button text={button} onClick={onClick} icon={icon} />
      </div>
    </div>
  )
}

export default ToolHeader;