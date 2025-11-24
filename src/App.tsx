import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/HomePage'
import LoginPage from './pages/primary/LoginPage'
import MainPage from './main/MainPage'
import SignupPage from './pages/primary/SignupPage'
import SignupResultPage from './pages/primary/SignupResultPage'
import NotFoundPage from './pages/primary/NotFoundPage'
import TeamChatPage from './main/features/teamChat/pages/TeamChatPage'
import FileSharingPage from './main/features/fileSharing/pages/FileSharingPage';
import SchedulePage from './main/features/schedule/pages/SchedulePage';
import TodoListPage from './main/features/todoList/pages/TodoListPage';
import FriendListPage from './main/features/friendList/pages/FriendListPage';
import DirectChatPage from './main/features/directChat/pages/DirectChatPage';
import InviteLinkPage from './main/features/teamManager/pages/InviteLinkPage';
import AppProviders from './providers/AppProviders'
import { RouteWatcher } from './routes/RouteWatcher'
import './styles/global.css';

const App: React.FC = () => {

  return (
    <AppProviders>
      <RouteWatcher />
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-result" element={<SignupResultPage />} />

        <Route path="/main" element={<MainPage />} >
          <Route path="teamchat" element={<TeamChatPage />} />
          <Route path="filesharing" element={<FileSharingPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="todolist" element={<TodoListPage />} />
          <Route path="friendlist" element={<FriendListPage />} />
          <Route path="directchat" element={<DirectChatPage />} />
        </Route>

        <Route path="/invite">
          <Route path=":id" element={<InviteLinkPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProviders>
  )
}

export default App
