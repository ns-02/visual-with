import ChatPage from '../features/Chat/Pages/ChatPage';
import FileSharingPage from '../features/FileSharing/Pages/FileSharingPage';
import './layouts.css'

function RightSection() {
  return (
    <section className="rightsection">
      {/* <ChatPage></ChatPage> */}
      <FileSharingPage></FileSharingPage>
    </section>
  )
}

export default RightSection;