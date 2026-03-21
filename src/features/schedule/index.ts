import { Dispatch, SetStateAction } from 'react';

export interface CalendarProps {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}
