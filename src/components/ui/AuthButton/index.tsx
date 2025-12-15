import React from 'react';
import styles from './AuthButton.module.css';

type Type = 'button' | 'submit' | 'reset';

type Prop = {
  type?: Type;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type, children, onClick }: Prop) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
