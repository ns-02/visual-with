import Header from "../../../layouts/Header";
import LeftCalendar from "../layouts/LeftCalendar";
import RightContents from "../layouts/RightContents";
import './SchedulePage.css'

function SchedulePage() {
  return (
    <div className="scheduleframe">
      <Header></Header>
      <div className="schedulebody">
        <LeftCalendar></LeftCalendar>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default SchedulePage;
