import type { ReactNode } from 'react';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import styles from './HeaderBar.module.css';

interface HeaderBarProps {
  label: string;
  button?: string;
  onClick?: () => void;
  children?: ReactNode;
  inputIcon?: ReactNode;
}

function HeaderBar({
  label,
  button,
  onClick,
  children,
  inputIcon,
}: HeaderBarProps) {
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.rsection}>
        <Input value='' placeholder='검색' sizeMode='fixed'>
          {inputIcon}
        </Input>
        {button && onClick && (
          <Button
            text={button}
            className={styles.button_primary}
            onClick={onClick}
          >
            {children}
          </Button>
        )}
      </div>
    </div>
  );
}

export default HeaderBar;
