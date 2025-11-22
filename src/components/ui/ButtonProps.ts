import React from "react";

type Shape = 'normal' | 'square' | 'circle'

export default interface ButtonProps {
  text?: string;
  shape?: Shape;
  to?: string;
  onCustomClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children?: React.ReactNode;
}