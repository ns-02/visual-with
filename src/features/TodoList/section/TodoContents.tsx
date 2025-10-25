import './Section.css'

function RightContents() {
  return (
    <div className="todo-contents">
      <div>
        진행 중 (2)
        <div>
          <input type='checkbox'></input><span>제목 1</span>
          <div>내용 1</div>
        </div>
        <div>
          <input type='checkbox'></input><span>제목 2</span>
          <div>내용 2</div>
        </div>
      </div>
      <br></br>
      <div>
        완료 (2)
        <div>
          <input type='checkbox'></input><span>제목 3</span>
          <div>내용 3</div>
        </div>
        <div>
          <input type='checkbox'></input><span>제목 4</span>
          <div>내용 4</div>
        </div>
      </div>
    </div>
  )
}

export default RightContents;