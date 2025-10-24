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
  

  return (
    <div className="header">
      <span>
        {/* <span>아이콘 </span> */}
        <span>{renderTitle()}</span>
      </span>
      <input placeholder="검색"></input>
    </div>
  )
}

export default MainHeader;