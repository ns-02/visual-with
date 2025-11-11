import styles from './FileSharingSection.module.css'

function TopFiles() {
  return (
    <div className={styles["top-files"]}>
      <span>
        <button>전체</button>
      </span>
      <span>
        <button>이미지</button>
      </span>
      <span>
        <button>동영상</button>
      </span>
      <span>
        <button>오디오</button>
      </span>
      <span>
        <button>기타</button>
      </span>
    </div>
  )
}

export default TopFiles;