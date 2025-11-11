import TopFiles from "../section/TopFiles";
import BottomSection from "../section/BottomSection";
import styles from './FileSharingPage.module.css'

function FileSharingPage() {
  return (
    <div className={styles.page}>
      <TopFiles></TopFiles>
      <BottomSection></BottomSection>
    </div>
  )
}

export default FileSharingPage;
