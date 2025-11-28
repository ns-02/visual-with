import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../ui/Button';
import DialogProps from './DialogProps';
import styles from './Dialog.module.css';

const AlertDialog = ({
  open,
  onOpenChange,
  title = '제목',
  description = '설명',
  children,
  confirmButton,
}: DialogProps) => {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.overlay} />
        <RadixAlertDialog.Content className={styles.content}>
          <RadixAlertDialog.Title className={styles.title}>
            {title}
          </RadixAlertDialog.Title>
          <RadixAlertDialog.Description className={styles.description}>
            {description}
          </RadixAlertDialog.Description>
          {children}
          <div className={styles.btnfield}>
            <RadixAlertDialog.Cancel asChild>
              <Button text='취소'></Button>
            </RadixAlertDialog.Cancel>
            {confirmButton}
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default AlertDialog;
