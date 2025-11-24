import { getDate } from '../../../../utils/dateUtils';
import ScheduleCard from '../components/ScheduleCard';
import styles from './ScheduleSection.module.css'

function RightContents() {
  const [month, day] = getDate();

  const todayScheduleItems = [
    { id: 1, title: '코드 리뷰', date: '2025.11.20', time: '14:00', state: '진행중' },
    { id: 2, title: '주간 팀 작업 계획', date: '2025.11.20', time: '16:30', state: '진행중' },
  ];

  const scheduledItems = [
    { id: 1, title: '프로젝트 미팅', date: '2025.11.21', time: '10:00', state: '예정' },
    { id: 2, title: '디자인 리뷰', date: '2025.11.22', time: '15:00', state: '예정' },
    { id: 3, title: '클라이언트 미팅', date: '2025.11.23', time: '11:00', state: '예정' },
  ];

  return (
    <div className={styles["right-contents"]}>
      <div style={{ marginTop: "24px", marginBottom: "12px" }}>
        {`오늘 (${month}월 ${day}일)`}
      </div>
      {
        todayScheduleItems.map((item) => {
          return (
            <ScheduleCard key={item.id} title={item.title} date={item.date} time={item.time} state={item.state} />
          )
        })
      }
      <div style={{ marginTop: "24px", marginBottom: "12px" }}>
        예정된 일정
      </div>
      {
        scheduledItems.map((item) => {
          return (
            <ScheduleCard key={item.id} title={item.title} date={item.date} time={item.time} state={item.state} />
          )
        })
      }
    </div>
  )
}

export default RightContents;