import LeftCalendar from "../section/LeftCalendar";
import RightContents from "../section/RightContents";
import './SchedulePage.css'

function SchedulePage() {
  return (
    <div className="schedule">
      <LeftCalendar></LeftCalendar>
      <RightContents></RightContents>
    </div>
  )
}

export default SchedulePage;
