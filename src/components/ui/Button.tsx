import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import ButtonProps from '../../types/ButtonProps';

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { text, shape = 'normal', to, onCustomClick, children, ...rest } = props;
  const btnStyle = `${styles.button} ${(styles as any)[shape]}`;

  // Radix와 커스텀 클릭 둘 다 동작하기 위함
  const handleClick: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (e) => {
    if ((props as any).onClick) (props as any).onClick(e);
    if (onCustomClick) onCustomClick(e);
  }

  if (to) {
    return (
      <Link 
        ref={ref as React.Ref<HTMLAnchorElement>} 
        to={to} 
        className={btnStyle} 
        onClick={handleClick} 
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <button 
      ref={ref as React.Ref<HTMLButtonElement>} 
      className={btnStyle} 
      onClick={handleClick}
      {...rest}
    >
      {children}
      {text && text}
    </button>
  )
});

export default Button;