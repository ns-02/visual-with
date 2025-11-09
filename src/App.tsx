import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/HomePage'
import LoginPage from './pages/primary/LoginPage'
import MainPage from './pages/primary/MainPage'
import SignupPage from './pages/primary/SignupPage'
import SignupResultPage from './pages/primary/SignupResultPage'
import NotFoundPage from './pages/primary/NotFoundPage'
import ChatPage from './features/teamChat/pages/ChatPage'
import FileSharingPage from './features/fileSharing/pages/FileSharingPage';
import SchedulePage from './features/schedule/pages/SchedulePage';
import TodoListPage from './features/todoList/pages/TodoListPage';
import FriendListPage from './features/friendList/pages/FriendListPage';
import DirectPage from './features/directChat/pages/DirectPage';
import { ToolProvider } from './context/ToolContext';
import { RouteWatcher } from './routes/RouteWatcher'
import './styles/global.css';

const App: React.FC = () => {

  return (
    <ToolProvider>
      <RouteWatcher />
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
    </ToolProvider>
  )
}

export default App
