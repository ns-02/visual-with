import React from 'react';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import styles from './HeaderBar.module.css';

interface HeaderBarProps {
  label: string;
  button?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  inputIcon?: React.ReactNode;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  label,
  button,
  onClick,
  children,
  inputIcon,
}) => {
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
          <Button text={button} onCustomClick={onClick}>
            {children}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
