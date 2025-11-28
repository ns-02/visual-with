import React from 'react';

export default interface HeaderBarProps {
  label: string;
  button?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  inputIcon?: React.ReactNode;
}
