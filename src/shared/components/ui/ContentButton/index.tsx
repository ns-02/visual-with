import { forwardRef } from 'react';
import type { MouseEvent, MouseEventHandler, ReactNode, Ref } from 'react';
import styles from './ContentButton.module.css';

interface ContentButtonProps {
  children?: ReactNode;
  /** Radix `asChild` 등이 연결하는 네이티브 클릭 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** 앱 전용 핸들러 — Radix와 네이티브 `onClick`을 분리해 두면 합성이 단순해진다 */
  onCustomClick?: (e: MouseEvent) => void;
}

const ContentButton = forwardRef<HTMLButtonElement, ContentButtonProps>(
  (props, ref) => {
    const { children, onClick, onCustomClick, ...rest } = props;

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      onClick?.(e);
      if (onCustomClick) onCustomClick(e);
    };

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
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
