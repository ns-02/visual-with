import React from 'react';
import styles from './ContentButton.module.css';

interface ContentButtonProps {
  children?: React.ReactNode;
  onCustomClick?: (e: React.MouseEvent) => void;
}

const ContentButton = React.forwardRef<HTMLButtonElement, ContentButtonProps>(
  (props, ref) => {
    const { children, onCustomClick, ...rest } = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if ((props as any).onClick) (props as any).onClick(e);
      if (onCustomClick) onCustomClick(e);
    };

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={styles.button}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default ContentButton;
