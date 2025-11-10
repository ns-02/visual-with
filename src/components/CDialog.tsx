import { Dispatch, SetStateAction, useEffect } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import styles from './CDialog.module.css';
import Field from "./ui/Field";
import Button from "./ui/Button";

interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>; 
  dialogInfo?: {
    title: string;
    fields: { label: string, input: string }[]
    btnOk: { name: string, onClick?: () => void }
  }
}

const CDialog = ({ open, onOpenChange, dialogInfo }: DialogProps) => {
  const { 
    title = '제목', 
    fields, 
    btnOk = { name: '확인' }
  } = dialogInfo ?? {};

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange} >
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content}>
          <RadixDialog.Title className={styles.title}>{title}</RadixDialog.Title>
          <RadixDialog.Description className={styles.description} />
          <Field />
          <div className={styles.btnfield}>
            <RadixDialog.Close asChild>
              <Button text="취소"></Button>
            </RadixDialog.Close>
            <RadixDialog.Close asChild>
              <Button text={btnOk.name}></Button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
};

export default CDialog;
