import * as RadixProgress from '@radix-ui/react-progress';
import styles from './Progress.module.css';

const Progress = ({ progress }: { progress: number }) => {
  return (
    <RadixProgress.Root
      value={progress}
      max={100}
      className={styles.progress_root}
    >
      <RadixProgress.Indicator
        className={styles.progress_indicator}
        style={{ width: `${progress}%` }}
      />
    </RadixProgress.Root>
  );
};

export default Progress;
