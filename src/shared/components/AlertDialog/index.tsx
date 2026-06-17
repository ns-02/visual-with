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
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.overlay} />
        <RadixAlertDialog.Content
          className={styles.content}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              e.preventDefault();
              onConfirm?.();
            }
          }}
        >
          <RadixAlertDialog.Title className={styles.title}>
            {title}
          </RadixAlertDialog.Title>
          <RadixAlertDialog.Description className={styles.description}>
            {description}
          </RadixAlertDialog.Description>

          {children}

          <div className={styles.btnfield}>
            <RadixAlertDialog.Cancel asChild>
              <Button text='취소' className={styles.button_default} />
            </RadixAlertDialog.Cancel>

            <RadixAlertDialog.Action asChild>
              <Button
                text={confirmText}
                className={styles.button_primary}
                onClick={(e) => {
                  e.preventDefault();
                  onConfirm?.();
                }}
              />
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default AlertDialog;
