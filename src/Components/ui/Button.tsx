import { Plus } from 'lucide-react';
import "./Button.css"
import React from 'react';

interface ButtonProps {
  text?: string;
  icon?: typeof Plus;
  square?: boolean;
  onCustomClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { text, icon: Icon, square = false, onCustomClick, ...rest } = props;
  
  // Radix와 커스텀 클릭 둘 다 동작하기 위함
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if ((props as any).onClick) (props as any).onClick(e);
    if (onCustomClick) onCustomClick(e);
  }

  return (
    <button 
      ref={ref} 
      className={`c-button ${square && "square"}`} 
      onClick={handleClick}
      {...rest}
    >
      {Icon && <Icon className="c-icon" />}
      {text && text}
    </button>
  )
});

export default Button;