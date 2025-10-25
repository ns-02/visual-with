import { Dispatch, SetStateAction } from 'react';
import './Layouts.css'
import { Calendar, FileText, Link2, ListTodo, MessageSquare, MessagesSquare, Users } from 'lucide-react';

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

type Prop = {
  // state: boolean;
  setTool: Dispatch<SetStateAction<Tool>>;
  onInvite: VoidFunction;
}

function Divider() {
  return (
    <hr style={{ marginTop: 12, marginBottom: 12 }}></hr>
  );
}

function LeftMenu({ setTool, onInvite }: Prop) {
  return (
    <>
      <section className='leftmenu'>
        <div>
          <button>
            개발팀
          </button>
          <button onClick={() => {
            onInvite();
          }}><Link2 /></button>
        </div>
        <Divider />
        <div>
          <div>
            <button onClick={() => setTool('team-chat')}>
              <MessagesSquare />
            </button>
          </div>
          <div>
            <button onClick={() => setTool('files')}><FileText /></button>
          </div>
          <div>
            <button onClick={() => setTool('schedule')}><Calendar /></button>
          </div>
          <div>
            <button onClick={() => setTool('todos')}><ListTodo /></button>
          </div>
          <Divider />
          <div>
            <button onClick={() => setTool('friends')}><Users /></button>
          </div>
          <div>
            <button onClick={() => setTool('direct-chat')}><MessageSquare /></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeftMenu;