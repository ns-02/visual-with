import { Dispatch, SetStateAction } from 'react';
import './Layouts.css'

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

type Prop = {
  // state: boolean;
  setTool: Dispatch<SetStateAction<Tool>>;
  onInvite: VoidFunction;
}

function LeftMenu({ setTool, onInvite }: Prop) {
  return (
    <>
      <section className='leftmenu'>
        <div>
          <button onClick={() => {
            onInvite();
          }}>링크 공유</button>
        </div>
        <div>
          <div>
            <button onClick={() => setTool('team-chat')}>팀 채팅</button>
          </div>
          <div>
            <button onClick={() => setTool('files')}>파일</button>
          </div>
          <div>
            <button onClick={() => setTool('schedule')}>일정</button>
          </div>
          <div>
            <button onClick={() => setTool('todos')}>할 일</button>
          </div>
          <div>
            <button onClick={() => setTool('friends')}>친구 목록</button>
          </div>
          <div>
            <button onClick={() => setTool('direct-chat')}>친구 채팅</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeftMenu;