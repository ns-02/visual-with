import './Section.css'

function BottomSection() {
  return (
    <div className="bottom-section">
      <div className="drag-and-drop">
        <p>파일을 여기에 드래그하여 업로드하세요</p>
        <p>또는</p>
        <button>파일 선택</button>
      </div>
      <div className="upload">
        업로드 중
      </div>
      <div className="file-list">
        파일 목록
      </div>
    </div>
  )
}

export default BottomSection;