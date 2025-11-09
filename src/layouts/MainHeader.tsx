import { Plus, Upload } from 'lucide-react';
import { Tool } from './LeftMenu';
import ToolHeader from '../components/ToolHeader';
import styles from './Layouts.module.css'
import { useTool } from '../context/ToolContext';

interface HeaderItem {
  id: Tool;
  label: string;
  button?: string;
  onClick?: () => void | undefined;
  icon?: typeof Plus;
}

function MainHeader() {
  const { toolId } = useTool();

  const headerItems: HeaderItem[] = [
    { id: 'team-chat', label: '팀 채팅' },
    { id: 'files', label: '파일 공유', button: '업로드', icon: Upload, onClick: () => console.log("파일 업로드") },
    { id: 'schedule', label: '일정 관리', button: '일정 추가', icon: Plus, onClick: () => console.log("일정 추가") },
    { id: 'todos', label: '할 일 목록', button: '할 일 추가', icon: Plus, onClick: () => console.log("할 일 추가") },
    { id: 'friends', label: '친구 목록', button: '친구 추가', icon: Plus, onClick: () => console.log("친구 추가") },
    { id: 'direct-chat', label: '친구 채팅' }
  ];

  const headerItem = headerItems.filter(({ id }) => id === toolId );
  
  return (
    <div className={styles.header}>
      {
        headerItem.map(({id, label, button, onClick, icon}) => {
          return (
            <ToolHeader 
              label={label}
              button={button}
              onClick={onClick}
              icon={icon}
              key={id}
            />
          )
        })
      }
    </div>
  )
}

export default MainHeader;