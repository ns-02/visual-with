import { Dispatch, SetStateAction } from 'react';
import { Calendar, FileText, Link2, ListTodo, MessageSquare, MessagesSquare, Users } from 'lucide-react';
import IconButton from '../components/ui/IconButton';
import './Layouts.css'

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

interface NavItem {
  id: Tool;
  icon: typeof MessagesSquare;
}

type Prop = {
  setTool: Dispatch<SetStateAction<Tool>>;
  onInvite: VoidFunction;
}

function Divider() {
  return (
    <hr style={{ marginTop: 8, marginBottom: 8, width: "100%" }}></hr>
  );
}

function LeftMenu({ setTool, onInvite }: Prop) {
  const topNavItems: NavItem[] = [
    { id: 'team-chat', icon: MessagesSquare },
    { id: 'files', icon: FileText },
    { id: 'schedule', icon: Calendar },
    { id: 'todos', icon: ListTodo },
  ];

  const bottomNavItems: NavItem[] = [
    { id: 'friends', icon: Users },
    { id: 'direct-chat', icon: MessageSquare },
  ];

  return (
    <section className='leftmenu'>
      <div>
        <IconButton onClick={() => {}}>개발</IconButton>
      </div>
      <div>
        <IconButton onClick={onInvite}><Link2 /></IconButton>
      </div>
      <Divider />
      {
        topNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id}>
              <IconButton onClick={() => setTool(item.id)}><Icon /></IconButton>
            </div>
          )
        })
      }
      <Divider />
      {
        bottomNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id}>
              <IconButton onClick={() => setTool(item.id)}><Icon /></IconButton>
            </div>
          )
        })
      }
    </section>
  )
}

export default LeftMenu;