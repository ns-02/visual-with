import LeftSubject from "../Layouts/LeftSubject";
import RightContents from "../Layouts/RightContents";
import './TodoListPage.css'

type Prop = {
  children: React.ReactNode;
}

function TodoListPage({ children }: Prop) {
  return (
    <div className="todolist-frame">
      {children}
      <div className="todolist-body">
        <LeftSubject></LeftSubject>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default TodoListPage;
