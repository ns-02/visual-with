import { Dispatch, SetStateAction } from 'react';

export interface CalenderProps {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}
