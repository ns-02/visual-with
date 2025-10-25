import { Dispatch, SetStateAction } from 'react';
import { Calendar, FileText, Link2, ListTodo, MessageSquare, MessagesSquare, Users } from 'lucide-react';
import IconButton from '../components/ui/IconButton';
import './Layouts.css'

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

interface NavItem {
  id: Tool;
  icon: typeof MessagesSquare;
  underline: boolean;
}

type Prop = {
  setTool: Dispatch<SetStateAction<Tool>>;
  onInvite: VoidFunction;
}

function Divider() {
  return (
    <hr style={{ marginTop: 12, marginBottom: 12, width: "100%" }}></hr>
  );
}

function LeftMenu({ setTool, onInvite }: Prop) {
  const navItems: NavItem[] = [
    { id: 'team-chat', icon: MessagesSquare, underline: false },
    { id: 'files', icon: FileText, underline: false },
    { id: 'schedule', icon: Calendar, underline: false },
    { id: 'todos', icon: ListTodo, underline: true },
    { id: 'friends', icon: Users, underline: false },
    { id: 'direct-chat', icon: MessageSquare, underline: false },
  ];

  return (
    <section className='leftmenu'>
      <div>
        <IconButton onClick={() => {}}>개발</IconButton>
        <IconButton onClick={onInvite}><Link2 /></IconButton>
      </div>
      <Divider />
      {
        navItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id}>
              <IconButton onClick={() => setTool(item.id)}><Icon /></IconButton>
              { item.underline && <Divider /> }
            </div>
          )
        })
      }
    </section>
  )
}

export default LeftMenu;