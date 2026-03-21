import {
  forwardRef,
  useState,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
} from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Shape = 'normal' | 'square' | 'circle';

interface ButtonProps {
  className?: string;
  text?: string;
  shape?: Shape;
  to?: string;
  /** Radix `asChild`·트리거 등이 붙이는 네이티브 클릭 핸들러 */
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  /**
   * 앱 쪽 비동기/로딩 처리용. Radix가 `asChild`로 자식에 핸들러를 합칠 때와
   * 네이티브 `onClick`을 나누면 충돌 없이 같이 쓰기 쉽다.
   */
  onCustomClick?: (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => Promise<void> | void;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
  const {
    className,
    text,
    shape = 'normal',
    to,
    onClick,
    onCustomClick,
    children,
    ...rest
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const shapeClass = styles[shape as keyof typeof styles];
  const btnStyle = `${styles.button} ${shapeClass} ${className ?? ''}`;

  // onClick(Radix/브라우저) + onCustomClick(로딩 등) 순서로 둘 다 호출
  const handleClick: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = async (e) => {
    onClick?.(e);
    if (onCustomClick) {
      setIsLoading(true);
      await onCustomClick(e);
      setIsLoading(false);
    }
  };

  if (to) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        to={to}
        className={btnStyle}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={isLoading}
      ref={ref as Ref<HTMLButtonElement>}
      className={btnStyle}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {text && text}
    </button>
  );
  },
);

export default Button;
