import { ChangeEvent } from 'react';

export interface InputProps {
  type?: string;
  value?: string;
  setValue?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export type Prop = {
  children?: React.ReactNode;
};
