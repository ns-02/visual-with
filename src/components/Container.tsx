import styles from './Container.module.css'

type Prop = {
  children: React.ReactNode;
}

function Container({ children }: Prop) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
    
  )
}

export default Container;