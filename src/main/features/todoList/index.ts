import React, { Dispatch, SetStateAction } from 'react';

export interface TodoItems {
  id: number;
  title?: string;
  description?: string;
  checked?: boolean;
}

export interface TodoListLabelProps {
  text?: string;
  count?: number;
  children?: React.ReactNode;
}
