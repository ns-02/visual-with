import { Dispatch, SetStateAction } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import styles from './Dialog.module.css';
import Field from "./ui/Field";
import Button from "./ui/Button";
import { X } from 'lucide-react';

interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>; 
  dialogInfo?: {
    title: string;
    fields: { label: string, input: string }[]
    btnOk: { name: string, onClick?: () => void }
  }
}

const Dialog = ({ open, onOpenChange, dialogInfo }: DialogProps) => {
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
          {
            fields?.map((field) => {
              return (
                <Field label={field.label} input={field.input} />
              )
            })
          }
          <div className={styles.btnfield}>
            <RadixDialog.Close asChild>
              <Button text="취소"></Button>
            </RadixDialog.Close>
            <RadixDialog.Close asChild>
              <Button text={btnOk.name}></Button>
            </RadixDialog.Close>
          </div>
          <RadixDialog.Close asChild>
            <button style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              display: 'inline-flex',
              width: 24,
              height: 24,
              margin: 0,
              padding: 0,
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}>
              <X size={14} />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
};

export default Dialog;
