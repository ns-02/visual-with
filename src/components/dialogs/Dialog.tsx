import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import Button from "../ui/Button";
import DialogProps from './DialogProps';
import styles from './Dialog.module.css';

const Dialog = ({ 
  open, onOpenChange, title = '제목', viewButton = true, children, confirmButton
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
              {confirmButton}
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
