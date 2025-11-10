import styles from "./Group.module.css";

type Prop = {
  children?: React.ReactNode;
}

function Group({ children }: Prop) {
  return (
    <div className={styles.group}>
      {children}
    </div>
  )
}

export default Group;