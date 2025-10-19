import { useState } from "react";
import Header from "../Layouts/Header";
import LeftMenu from "../Layouts/LeftMenu";
import RightSection from "../Layouts/RightSection";
import ChatPage from '../features/Chat/Pages/ChatPage';
import FileSharingPage from '../features/FileSharing/Pages/FileSharingPage';
import InvitePage from "../features/Invite/Pages/InvitePage";
import SchedulePage from '../features/Schedule/Pages/SchedulePage';
import TodoListPage from '../features/TodoList/Pages/TodoListPage';
import './css/MainPage.css';

function MainPage() {
  const [ isViewInvite, setIsViewInvite ] = useState(false);

  return (
    <div className="main">
      <LeftMenu></LeftMenu>
      <RightSection>
        {/* <ChatPage></ChatPage> */}
        {/* <FileSharingPage></FileSharingPage> */}
        {/* <SchedulePage></SchedulePage> */}
        <TodoListPage>
          <Header onViewInvite={() => {
            setIsViewInvite(!isViewInvite);
          }}></Header>
        </TodoListPage>
      </RightSection>
      <InvitePage isViewInvite={isViewInvite} setIsViewInvite={setIsViewInvite}></InvitePage>
    </div>
  )
}

export default MainPage;