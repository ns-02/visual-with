import { Plus, Upload } from 'lucide-react';
import ToolHeader from '../components/ToolHeader';
import './Layouts.css'

type Prop = {
  viewTool: string;
}

function MainHeader({ viewTool }: Prop) {

  const renderTitle = () => {
    switch (viewTool) {
      case 'team-chat':
        return "팀 채팅";
      case 'files':
        return "파일 공유";
      case 'schedule':
        return "일정 관리";
      case 'todos':
        return "할 일 목록";
      case 'friends':
        return "친구 목록";
      case 'direct-chat':
        return "친구 채팅";
      default:
        return "팀 채팅";
    }
  };

  const renderButton = () => {
    switch (viewTool) {
      case 'team-chat':
        return null;
      case 'files':
        return "업로드";
      case 'schedule':
        return "일정 추가";
      case 'todos':
        return "할 일 추가";
      case 'friends':
        return "친구 추가";
      case 'direct-chat':
        return null;
      default:
        return null;
    }
  };

  const renderIcon = () => {
    switch (viewTool) {
      case 'files':
        return Upload;
      case 'schedule':
      case 'todos':
      case 'friends':
        return Plus;
    }
  };
  

  return (
    <div className="header">
      <ToolHeader
        label={renderTitle()}
        button={renderButton()}
        onClick={() => {}}
        icon={renderIcon()}
      />
    </div>
  )
}

export default MainHeader;