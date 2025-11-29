import { Dispatch, SetStateAction } from 'react';
import { TeamData } from '@models/Team';

export interface TeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
  onDelete?: () => void;
  deleteTeamData?: TeamData;
}

export interface DropdownProps {
  triggerElement?: React.ReactNode;
}
