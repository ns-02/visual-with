import { Route, Routes } from 'react-router-dom';
import * as Auth from '@pages/auth';
import HomePage from '@pages/HomePage';
import { RouteWatcher } from './RouteWatcher';
import PrivateRoute from './PrivateRoute';
import * as Feat from '@features';

export default function AppRoutes() {
  return (
    <>
      <RouteWatcher />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<Auth.LoginPage />} />
        <Route path='/signup' element={<Auth.SignupPage />} />
        <Route path='/signup-result' element={<Auth.SignupResultPage />} />

        <Route element={<PrivateRoute />}>
          <Route path='/main' element={<Feat.MainLayout />}>
            <Route index element={<Feat.MainPage />} />
            <Route path='friendlist' element={<Feat.FriendListPage />} />
            <Route path='directchat' element={<Feat.DirectChatPage />} />

            <Route path=':teamId' element={<Feat.TeamLayout />}>
              <Route index element={<Feat.TeamPage />} />
              <Route path='teamchat' element={<Feat.TeamChatPage />} />
              <Route path='filesharing' element={<Feat.FileSharingPage />} />
              <Route path='schedule' element={<Feat.SchedulePage />} />
              <Route path='todolist' element={<Feat.TodoListPage />} />
            </Route>
          </Route>
        </Route>

        <Route path='/invite'>
          <Route path=':id' element={<Feat.InviteLinkPage />} />
        </Route>

        <Route path='*' element={<Auth.NotFoundPage />} />
      </Routes>
    </>
  );
}
