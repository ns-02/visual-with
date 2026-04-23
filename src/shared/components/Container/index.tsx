import styles from './Container.module.css';

type Prop = {
  children: React.ReactNode;
  outerButton?: React.ReactNode;
};

function Container({ children, outerButton }: Prop) {
  return (
    <div className={styles.layout}>
      <span></span>
      <div className={styles.container}>{children}</div>
      {outerButton}
    </div>
  );
}

export default Container;
