import * as RadixToast from '@radix-ui/react-toast';
import styles from './Toast.module.css';
import { useToastStore } from '@core/store/useToastStore';

function ToastViewport() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <RadixToast.Provider swipeDirection='right'>
      {toasts.map((t) => (
        <RadixToast.Root
          key={t.id}
          className={`${styles.root} ${styles[t.type]}`}
          duration={t.duration ?? 3000}
          onOpenChange={(open) => {
            if (!open) {
              setTimeout(() => removeToast(t.id), 150);
            }
          }}
        >
          <RadixToast.Description className={styles.description}>
            {t.message}
          </RadixToast.Description>
        </RadixToast.Root>
      ))}
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
}

export default ToastViewport;
