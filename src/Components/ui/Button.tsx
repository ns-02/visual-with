import "./Button.css"

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon }) => {
  return (
    <button className="c-button" onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default Button;