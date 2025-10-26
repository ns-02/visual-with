import { Plus } from 'lucide-react';
import "./Button.css"

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: typeof Plus;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon: Icon }) => {
  return (
    <button className="c-button" onClick={onClick}>
      {Icon && <Icon className="c-icon" />}
      {text}
    </button>
  )
}

export default Button;