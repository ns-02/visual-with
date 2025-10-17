import ChatPage from '../features/Chat/Pages/ChatPage';
import FileSharingPage from '../features/FileSharing/Pages/FileSharingPage';
import SchedulePage from '../features/Schedule/Pages/SchedulePage';
import './layouts.css'

function RightSection() {
  return (
    <section className="rightsection">
      {/* <ChatPage></ChatPage> */}
      {/* <FileSharingPage></FileSharingPage> */}
      <SchedulePage></SchedulePage>
    </section>
  )
}

export default RightSection;