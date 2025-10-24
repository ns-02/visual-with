import LeftCalendar from "../section/LeftCalendar";
import RightContents from "../section/RightContents";
import './SchedulePage.css'

type Prop = {
  children: React.ReactNode;
}

function SchedulePage({ children }: Prop) {
  return (
    <div className="schedule-frame">
      {children}
      <div className="schedule-body">
        <LeftCalendar></LeftCalendar>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default SchedulePage;
