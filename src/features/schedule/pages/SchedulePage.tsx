import styles from './ScheduleLayout.module.css';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import { formatDate } from '@shared/utils/formatDate';
import { useScheduleManager } from '../hooks/useScheduleManager';
import { InfoCard, DropdownTrigger } from '@shared/components';
import ScheduleDropdown from '../components/ScheduleDropdown';

const isValidDate = (value: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  return (
    year > 0 &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= (daysInMonth[month - 1] ?? 0)
  );
};

const hasValidDateRange = (startDate: string, finishDate?: string) =>
  !!finishDate &&
  isValidDate(startDate) &&
  isValidDate(finishDate) &&
  startDate <= finishDate;

const displayDate = (date: string) =>
  isValidDate(date) ? date.replaceAll('-', '.') : date;

function SchedulePage() {
  const { teamScheduleData } = useScheduleManager(true);

  const [selected, setSelected] = useState<Date>();
  const day = new Date().getDate();

  const filteredSchedules = teamScheduleData.filter((item) => {
    const selectedFormattedDate = selected
      ? formatDate(selected)
      : formatDate();
    if (!item.finishDate || !hasValidDateRange(item.startDate, item.finishDate)) {
      return item.startDate === selectedFormattedDate;
    }
    return (
      item.startDate <= selectedFormattedDate &&
      selectedFormattedDate <= item.finishDate
    );
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
            const date =
              item.finishDate &&
              hasValidDateRange(item.startDate, item.finishDate) &&
              item.finishDate !== item.startDate
                ? `${displayDate(item.startDate)} ~ ${displayDate(item.finishDate)}`
                : displayDate(item.startDate);
            const time =
              item.startTime && item.finishTime
                ? `${item.startTime} ~ ${item.finishTime}`
                : item.startTime;
            return (
              <InfoCard
                key={item.id}
                title={item.title}
                content={
                  item.description
                    ? `${item.authorName} · ${date} · ${time} · ${item.description}`
                    : `${item.authorName} · ${date} · ${time}`
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
