import { Dispatch, SetStateAction } from 'react';

export interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export interface CalenderProps {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}

export interface ScheduleCardProps {
  title?: string;
  date?: string;
  time?: string;
  state?: string;
}
