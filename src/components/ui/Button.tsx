import { Plus } from 'lucide-react';
import styles from "./Button.module.css";
import React from 'react';

type Shape = 'normal' | 'square' | 'circle'
type IconSize = 16 | 24

interface ButtonProps {
  text?: string;
  shape?: Shape;
  icon?: typeof Plus;
  iconSize?: IconSize;
  onCustomClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { text, shape = 'normal', icon: Icon, iconSize, onCustomClick, ...rest } = props;
  const buttonStyle = `${styles.button} ${(styles as any)[shape]}`;
  const iconStyle = (Icon && iconSize) ? `${(styles as any)[`icon--size-${iconSize}`]}` : undefined;

  // Radix와 커스텀 클릭 둘 다 동작하기 위함
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if ((props as any).onClick) (props as any).onClick(e);
    if (onCustomClick) onCustomClick(e);
  }

  return (
    <button 
      ref={ref} 
      className={buttonStyle} 
      onClick={handleClick}
      {...rest}
    >
      {Icon && <Icon className={iconStyle} />}
      {text && text}
    </button>
  )
});

export default Button;