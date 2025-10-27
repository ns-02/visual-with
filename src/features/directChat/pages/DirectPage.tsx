import DirectContents from '../section/DirectContents';
import DirectBottom from '../section/DirectBottom';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import './DirectPage.css'

function DirectPage() {
  return (
    <div className="direct-frame">
      <LeftFriends></LeftFriends>
      <RightChats>
        <DirectContents></DirectContents>
        <DirectBottom></DirectBottom>
      </RightChats>
    </div>
  )
}

export default DirectPage;
