import styles from "./DragAndDrop.module.css";

const DragAndDrop = () => {
  return (
    <div className={styles.container}>
      <p style={{ textAlign: "center", color: "#777" }}>(드래그 앤 드롭 요소 예정)</p>
      {/* <p>파일을 여기에 드래그하여 업로드하세요</p>
        <p>또는</p>
        <button>파일 선택</button> */}
    </div>
  )
}

export default DragAndDrop;