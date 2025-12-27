import { useTeam } from '@core/contexts/TeamContext';
import ScheduleRoot from '../layouts/ScheduleRoot';
import LeftCalendarPanel from '../layouts/LeftCalendarPanel';
import ScheduleViewPanel from '../layouts/ScheduleViewPanel';

function SchedulePage() {
  // 현재 선택된 팀 데이터
  const { selectTeamId } = useTeam();

  return (
    <ScheduleRoot>
      <LeftCalendarPanel></LeftCalendarPanel>
      <ScheduleViewPanel></ScheduleViewPanel>
    </ScheduleRoot>
  );
}

export default SchedulePage;
