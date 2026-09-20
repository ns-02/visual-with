import styles from './Spinner.module.css';

const Spinner = () => {
  return <div className={styles.spinner} role='status' aria-label='로딩 중' />;
};

export default Spinner;
