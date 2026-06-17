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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) onConfirm();
  };

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content} asChild>
          <form onSubmit={handleSubmit}>
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
                      type='button'
                      text='취소'
                      className={styles.button_default}
                    />
                  </RadixDialog.Close>
                )}

                {viewConfirm && (
                  <Button
                    type='submit'
                    text={confirmText}
                    className={styles.button_primary}
                  />
                )}
              </div>
            )}

            <RadixDialog.Close asChild>
              <button type='button' className={styles.button_x}>
                <X size={14} />
              </button>
            </RadixDialog.Close>
          </form>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
