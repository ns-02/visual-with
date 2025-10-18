import Header from "../../../Layouts/Header";
import LeftSubject from "../Layouts/LeftSubject";
import RightContents from "../Layouts/RightContents";
import './TodoListPage.css'

function TodoListPage() {
  return (
    <div className="todolistframe">
      <Header></Header>
      <div className="todolistbody">
        <LeftSubject></LeftSubject>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default TodoListPage;
