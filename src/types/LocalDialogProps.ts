import { Dispatch, SetStateAction } from "react";

export default interface LocalDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}