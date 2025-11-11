import styles from './Section.module.css'

type Prop = {
  children: React.ReactNode;
}


function RightChats({ children }: Prop) {
  return (
    <div className={styles["right-chats"]}>
      {children}
    </div>
  )
}

export default RightChats;