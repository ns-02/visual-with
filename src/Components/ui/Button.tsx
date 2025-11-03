import { Plus } from 'lucide-react';
import "./Button.css"

interface ButtonProps {
  text: string | undefined;
  onClick: () => void;
  icon?: typeof Plus;
  square?: boolean;
}
// "c-button" + square && " square"
const Button: React.FC<ButtonProps> = ({ text, onClick, icon: Icon, square = false }) => {
  return (
    <button className={`c-button ${square && "square"}`} onClick={onClick}>
      {Icon && <Icon className="c-icon" />}
      {text && text}
    </button>
  )
}

export default Button;