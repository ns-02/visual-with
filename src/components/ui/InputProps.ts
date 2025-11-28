import React, { Dispatch, SetStateAction, KeyboardEvent } from 'react';

type SizeMode = 'fixed' | 'flexible';

export default interface InputProps {
  value: string;
  placeholder?: string;
  sizeMode: SizeMode;
  name?: string;
  setChat?: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearId?: number;
  children?: React.ReactNode;
}
