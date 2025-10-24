import LeftSubject from "../section/LeftSubject";
import RightContents from "../section/RightContents";
import './TodoListPage.css'

function TodoListPage() {
  return (
    <div className="todolist">
      <LeftSubject></LeftSubject>
      <RightContents></RightContents>
    </div>
  )
}

export default TodoListPage;
