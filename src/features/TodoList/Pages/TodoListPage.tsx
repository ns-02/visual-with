import LeftSubject from "../section/LeftSubject";
import RightContents from "../section/RightContents";
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
