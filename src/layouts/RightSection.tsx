import styles from './Layouts.module.css'

type Prop = {
  children: React.ReactNode;
}

function RightSection({ children }: Prop) {
  return (
    <section className={styles.rightsection}>
      {children}
    </section>
  )
}

export default RightSection;