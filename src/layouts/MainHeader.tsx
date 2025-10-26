import { Plus, Upload } from 'lucide-react';
import ToolHeader from '../components/ToolHeader';
import './Layouts.css'

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

type Prop = {
  viewTool: Tool;
}

interface HeaderItem {
  id: Tool;
  label: string;
  button?: string;
  onClick?: () => void | undefined;
  icon?: typeof Plus;
}

function MainHeader({ viewTool }: Prop) {
  const headerItems: HeaderItem[] = [
    { id: 'team-chat', label: '팀 채팅' },
    { id: 'files', label: '파일 공유', button: '업로드', icon: Upload, onClick: () => console.log("파일 업로드") },
    { id: 'schedule', label: '일정 관리', button: '일정 추가', icon: Plus, onClick: () => console.log("일정 추가") },
    { id: 'todos', label: '할 일 목록', button: '할 일 추가', icon: Plus, onClick: () => console.log("할 일 추가") },
    { id: 'friends', label: '친구 목록', button: '친구 추가', icon: Plus, onClick: () => console.log("친구 추가") },
    { id: 'direct-chat', label: '친구 채팅' }
  ];

  const headerItem = headerItems.filter(({ id }) => id === viewTool );
  
  return (
    <div className="header">
      {
        headerItem.map(({label, button, onClick, icon}) => {
          return (
            <ToolHeader 
              label={label}
              button={button}
              onClick={onClick}
              icon={icon}
            />
          )
        })
      }
    </div>
  )
}

export default MainHeader;