import { Dispatch, SetStateAction } from 'react';
import './Layouts.css'

enum Tool {
  TeamChat, Files, Schedule, Todos, Friends, DirectChat
}

type Prop = {
  // state: boolean;
  setTool: Dispatch<SetStateAction<Tool>>;
}

function LeftMenu({ setTool }: Prop) {
  return (
    <>
      <section className='leftmenu'> 
        <div>
          <div>
            <button onClick={() => setTool(Tool.TeamChat)}>팀 채팅</button>
          </div>
          <div>
            <button onClick={() => setTool(Tool.Files)}>파일</button>
          </div>
          <div>
            <button onClick={() => setTool(Tool.Schedule)}>일정</button>
          </div>
          <div>
            <button onClick={() => setTool(Tool.Todos)}>할 일</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeftMenu;