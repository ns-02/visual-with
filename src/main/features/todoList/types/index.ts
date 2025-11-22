import React, { Dispatch, SetStateAction } from "react";

export interface TodoItems {
  id: number;
  title?: string;
  description?: string;
  checked?: boolean;
};

export interface TodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export interface TodoListCardProps {
  title?: string;
  description?: string;
  checked?: boolean;
  onChange?: () => void;
};

export interface TodoListLabelProps {
  text?: string;
  count?: number;
  children?: React.ReactNode;
};