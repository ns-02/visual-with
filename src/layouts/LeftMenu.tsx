import { useNavigate } from 'react-router-dom';
import { Calendar1, FileText, Link2, ListTodo, LogOut, MessageSquare, MessagesSquare, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './Layouts.module.css'
import DropdownButton from '../components/DropdownButton';

export type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat' | 'log-out'

interface NavItem {
  id: Tool;
  icon: typeof MessagesSquare;
  path?: string;
}

type Prop = {
  onInvite: VoidFunction;
}

function Divider() {
  return (
    <hr style={{ marginTop: 8, marginBottom: 8, width: "100%" }}></hr>
  );
}

function LeftMenu({ onInvite }: Prop) {
  const navigate = useNavigate();

  const topNavItems: NavItem[] = [
    { id: 'team-chat', icon: MessagesSquare, path: 'teamchat' },
    { id: 'files', icon: FileText, path: 'filesharing' },
    { id: 'schedule', icon: Calendar1, path: 'schedule' },
    { id: 'todos', icon: ListTodo, path: 'todolist' },
  ];

  const middleNavItems: NavItem[] = [
    { id: 'friends', icon: Users, path: 'friendlist' },
    { id: 'direct-chat', icon: MessageSquare, path: 'directchat' },
  ];

  const bottomNavItem: NavItem = { id: 'log-out', icon: LogOut };

  const handleLogout = () => {
    // 로그아웃 처리

    navigate("/");
  };

  return (
    <section className={styles.leftmenu}>
      <div>
        <DropdownButton text='개' />
      </div>
      <div>
        <Button onCustomClick={onInvite} shape='circle' icon={Link2} iconSize={24} />
      </div>
      <Divider />
      {
        topNavItems.map((item) => {
          const { icon } = item;

          return (
            <div key={item.id}>
              <Button to={item.path} shape='circle' icon={icon} iconSize={24} />
            </div>
          )
        })
      }
      <Divider />
      {
        middleNavItems.map((item) => {
          const { icon } = item;

          return (
            <div key={item.id}>
              <Button to={item.path} shape='circle' icon={icon} iconSize={24} />
            </div>
          )
        })
      }
      <Divider />
      <div>
        <Button onCustomClick={handleLogout} shape='circle' icon={bottomNavItem.icon} iconSize={24} />
      </div>
    </section>
  )
}

export default LeftMenu;