import styles from './Layouts.module.css';

type Prop = {
  children: React.ReactNode;
};

function MainBody({ children }: Prop) {
  return <div className={styles.body}>{children}</div>;
}

export default MainBody;
