import { Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import * as Auth from '@pages/auth';
import MainLayout from '@features/main/MainLayout';
import MainPage from '@features/main/MainPage';
import TeamChatPage from '@features/teamChat/pages/TeamChatPage';
import FileSharingPage from '@features/fileSharing/pages/FileSharingPage';
import SchedulePage from '@features/schedule/pages/SchedulePage';
import TodoListPage from '@features/todoList/pages/TodoListPage';
import FriendListPage from '@features/friendList/pages/FriendListPage';
import DirectChatPage from '@features/directChat/pages/DirectChatPage';
import InviteLinkPage from '@features/teamManager/pages/InviteLinkPage';
import AppProviders from '@core/providers/AppProviders';
import PrivateRoute from '@core/routes/PrivateRoute';
import { RouteWatcher } from '@core/routes/RouteWatcher';
import '@core/styles/globalVariables.css';
import '@core/styles/global.css';
import TeamLayout from '@features/teamManager/layouts/TeamLayout';
import TeamPage from '@features/teamManager/pages/TeamPage';

const App: React.FC = () => {
  return (
    <AppProviders>
      <RouteWatcher />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<Auth.LoginPage />} />
        <Route path='/signup' element={<Auth.SignupPage />} />
        <Route path='/signup-result' element={<Auth.SignupResultPage />} />

        <Route element={<PrivateRoute />}>
          <Route path='/main' element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path='friendlist' element={<FriendListPage />} />
            <Route path='directchat' element={<DirectChatPage />} />

            <Route path=':teamId' element={<TeamLayout />}>
              <Route index element={<TeamPage />} />
              <Route path='teamchat' element={<TeamChatPage />} />
              <Route path='filesharing' element={<FileSharingPage />} />
              <Route path='schedule' element={<SchedulePage />} />
              <Route path='todolist' element={<TodoListPage />} />
            </Route>
          </Route>
        </Route>

        <Route path='/invite'>
          <Route path=':id' element={<InviteLinkPage />} />
        </Route>

        <Route path='*' element={<Auth.NotFoundPage />} />
      </Routes>
    </AppProviders>
  );
};

export default App;
