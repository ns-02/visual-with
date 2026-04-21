import { Outlet } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import RightSection from './components/RightSection';
import MainHeader from './components/MainHeader';
import MainBody from './components/MainBody';

function MainLayout() {
  return (
    <>
      <LeftMenu />
      <RightSection>
        <MainHeader />
        <MainBody>
          <Outlet />
        </MainBody>
      </RightSection>
    </>
  );
}

export default MainLayout;
