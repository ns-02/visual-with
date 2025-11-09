import { Dialog } from "radix-ui";
import styles from './CDialog.module.css';
import Field from "./ui/Field";

const CDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>버튼</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>제목</Dialog.Title>
          <Dialog.Description className={styles.description} />
          <Field />
          <div className={styles.btnfield}>
            <Dialog.Close asChild>
              <button>취소</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button>확인</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
};

export default CDialog;