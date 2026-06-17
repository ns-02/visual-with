import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button';
import DialogProps from '..';
import styles from './AlertDialog.module.css';

const AlertDialog = ({
  open,
  onOpenChange,
  title = '제목',
  description = '설명',
  children,
  confirmText,
  onConfirm,
}: DialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) onConfirm();
  };

  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.overlay} />
        <RadixAlertDialog.Content className={styles.content}>
          <form onSubmit={handleSubmit}>
            <RadixAlertDialog.Title className={styles.title}>
              {title}
            </RadixAlertDialog.Title>
            <RadixAlertDialog.Description className={styles.description}>
              {description}
            </RadixAlertDialog.Description>

            {children}

            <div className={styles.btnfield}>
              <RadixAlertDialog.Cancel asChild>
                <Button
                  type='button'
                  text='취소'
                  className={styles.button_default}
                />
              </RadixAlertDialog.Cancel>

              <RadixAlertDialog.Action asChild>
                <Button
                  type='submit'
                  text={confirmText}
                  className={styles.button_primary}
                />
              </RadixAlertDialog.Action>
            </div>
          </form>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default AlertDialog;
