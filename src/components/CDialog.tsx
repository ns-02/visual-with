import { Dialog } from "radix-ui";
import styles from './CDialog.module.css';
import Field from "./ui/Field";
import Button from "./ui/Button";

interface DialogInfo {
  dialogInfo?: {
    title: string;
    fields: { label: string, input: string }[]
    btnOk: { name: string, onClick?: () => void }
  }
}

const CDialog = ({ dialogInfo }: DialogInfo) => {
  const { 
    title = '제목', 
    fields, 
    btnOk = { name: '확인' }
  } = dialogInfo ?? {};

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>버튼</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Description className={styles.description} />
          <Field />
          <div className={styles.btnfield}>
            <Dialog.Close asChild>
              <Button text="취소"></Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button text={btnOk.name}></Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
};

export default CDialog;