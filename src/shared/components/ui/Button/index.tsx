import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'auth' | 'content';
  shape?: 'round' | 'square' | 'circle';
  asChild?: boolean;
  isLoading?: boolean;
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = 'normal',
    shape = 'round',
    asChild = false,
    isLoading = false,
    children,
    text,
    onClick,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'button';

  const btnStyle = [
    styles.button,
    variant !== 'content' && styles[shape],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref}
      className={btnStyle}
      disabled={isLoading || rest.disabled}
      onClick={onClick}
      {...rest}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children}
          {text}
        </>
      )}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
