import LeftMenu from "../Layouts/LeftMenu";
import RightSection from "../Layouts/RightSection";
import ChatPage from '../features/Chat/Pages/ChatPage';
import FileSharingPage from '../features/FileSharing/Pages/FileSharingPage';
import SchedulePage from '../features/Schedule/Pages/SchedulePage';
import TodoListPage from '../features/TodoList/Pages/TodoListPage';

function MainPage() {
  return (
    <>
      <LeftMenu></LeftMenu>
      <RightSection>
        {/* <ChatPage></ChatPage> */}
        {/* <FileSharingPage></FileSharingPage> */}
        {/* <SchedulePage></SchedulePage> */}
        <TodoListPage></TodoListPage>
      </RightSection>
    </>
  )
}

export default MainPage;