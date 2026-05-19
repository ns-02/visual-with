import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import Button from '../Button';
import DialogProps from '..';
import styles from './Dialog.module.css';

const Dialog = ({
  open,
  onOpenChange,
  title = '제목',
  viewCansel = true,
  viewConfirm = true,
  children,
  confirmText,
  onConfirm,
}: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content}>
          <RadixDialog.Title className={styles.title}>
            {title}
          </RadixDialog.Title>
          <RadixDialog.Description className={styles.description} />
          {children}
          {(viewCansel || viewConfirm) && (
            <div className={styles.btnfield}>
              {viewCansel && (
                <RadixDialog.Close asChild>
                  <Button
                    text='취소'
                    className={styles.button_default}
                  ></Button>
                </RadixDialog.Close>
              )}

              {viewConfirm && (
                <Button
                  text={confirmText}
                  onClick={onConfirm}
                  className={styles.button_primary}
                ></Button>
              )}
            </div>
          )}

          <RadixDialog.Close asChild>
            <button className={styles.button_x}>
              <X size={14} />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
