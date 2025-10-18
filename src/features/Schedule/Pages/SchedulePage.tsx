import Header from "../../../Layouts/Header";
import LeftCalendar from "../Layouts/LeftCalendar";
import RightContents from "../Layouts/RightContents";
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
