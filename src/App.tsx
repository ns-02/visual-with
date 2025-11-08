import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignupPage from './pages/SignupPage'
import SignupResultPage from './pages/SignupResultPage'
import NotFoundPage from './pages/NotFoundPage'
import ChatPage from './features/teamChat/pages/ChatPage'
import FileSharingPage from './features/fileSharing/pages/FileSharingPage';
import SchedulePage from './features/schedule/pages/SchedulePage';
import TodoListPage from './features/todoList/pages/TodoListPage';
import FriendListPage from './features/friendList/pages/FriendListPage';
import DirectPage from './features/directChat/pages/DirectPage';
import './styles/global.css'

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup-result" element={<SignupResultPage />} />
      <Route path="/main" element={<MainPage />} >
        <Route path="teamchat" element={<ChatPage />} />
        <Route path="filesharing" element={<FileSharingPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="todolist" element={<TodoListPage />} />
        <Route path="friendlist" element={<FriendListPage />} />
        <Route path="directchat" element={<DirectPage />} />
      </Route>
    </Routes>
  )
}

export default App
