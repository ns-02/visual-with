import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../../ui/Button';
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
              <Button text='취소' className={styles.button_default}></Button>
            </RadixAlertDialog.Cancel>
            <Button
              text={confirmText}
              onCustomClick={onConfirm}
              className={styles.button_primary}
            ></Button>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default AlertDialog;
