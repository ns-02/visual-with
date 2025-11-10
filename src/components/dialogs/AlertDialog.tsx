import React, { Dispatch, SetStateAction } from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import Button from "../ui/Button";
import styles from './Dialog.module.css';

interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  btnName?: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const AlertDialog = ({
  open, onOpenChange, title = '제목', btnName = '확인', description = '설명', children
}: DialogProps) => {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange} >
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.overlay} />
        <RadixAlertDialog.Content className={styles.content}>
          <RadixAlertDialog.Title className={styles.title}>{title}</RadixAlertDialog.Title>
          <RadixAlertDialog.Description className={styles.description}>{description}</RadixAlertDialog.Description>
          {children}
          <div className={styles.btnfield}>
            <RadixAlertDialog.Cancel asChild>
              <Button text="취소"></Button>
            </RadixAlertDialog.Cancel>
            <RadixAlertDialog.Action asChild>
              <Button text={btnName}></Button>
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  )
}

export default AlertDialog;