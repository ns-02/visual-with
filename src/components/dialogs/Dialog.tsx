import React, { Dispatch, SetStateAction } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import Button from "../ui/Button";
import styles from './Dialog.module.css';
import { X } from 'lucide-react';

interface DialogProps {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>; 
  title?: string;
  btnName?: string;
  viewButton?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Dialog = ({ 
  open, onOpenChange, title = '제목', btnName = '확인', viewButton = true, children
}: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange} >
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content}>
          <RadixDialog.Title className={styles.title}>{title}</RadixDialog.Title>
          <RadixDialog.Description className={styles.description} />
          {children}
          {
            viewButton && <div className={styles.btnfield}>
              <RadixDialog.Close asChild>
                <Button text="취소"></Button>
              </RadixDialog.Close>
              <RadixDialog.Close asChild>
                <Button text={btnName}></Button>
              </RadixDialog.Close>
            </div>
          }
          
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
