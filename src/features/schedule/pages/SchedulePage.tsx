import styles from './ScheduleLayout.module.css';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import { formatDate } from '@shared/utils/formatDate';
import { useScheduleManager } from '../hooks/useScheduleManager';
import { InfoCard, DropdownTrigger } from '@shared/components';
import ScheduleDropdown from '../components/ScheduleDropdown';

function SchedulePage() {
  const { teamScheduleData } = useScheduleManager();

  const [selected, setSelected] = useState<Date>();
  const day = new Date().getDate();

  const filteredSchedules = teamScheduleData.filter((item) => {
    const selectedFormattedDate = selected
      ? formatDate(selected)
      : formatDate();
    return item.startDate === selectedFormattedDate;
  });

  return (
    <div className={styles.schedule_root}>
      <div className={styles.left_calendar_panel}>
        <div className={styles.calendar_container}>
          <Calendar selected={selected} setSelected={setSelected} />
        </div>
        <br />
        <div>
          <p>{selected ? `${selected.getDate()}일` : `${day}일 (오늘)`}</p>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })
          ) : (
            <p style={{ color: '#777' }}>일정 없음</p>
          )}
        </div>
      </div>

      <div className={styles.schedule_view_panel}>
        <div style={{ marginTop: '24px', marginBottom: '12px' }}>일정 목록</div>

        <div className='card_list'>
          {teamScheduleData.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.title}
                content={
                  item.description
                    ? `${item.authorName} · ${item.startDate} · ${item.startTime} · ${item.description}`
                    : `${item.authorName} · ${item.startDate} · ${item.startTime}`
                }
              >
                <ScheduleDropdown
                  scheduleId={item.id}
                  authorId={item.authorId}
                  triggerElement={<DropdownTrigger />}
                />
              </InfoCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
