import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { CalenderProps } from '..';
import styles from './Calender.module.css';
import 'react-day-picker/style.css';
import '../../../../styles/global_daypicker.css';

const Calender = ({ selected, setSelected }: CalenderProps) => {
  return (
    <>
      <DayPicker
        animate
        mode='single'
        selected={selected}
        onSelect={setSelected}
        // 너비 조정 방법 (매우 중요)
        style={
          {
            '--rdp-day-width': '38px',
            '--rdp-day_button-width': '36px',
            '--rdp-day_button-height': '36px',
            '--rdp-today-color': '#6495ED',
            '--rdp-selected-border': '2px solid #6495ED',
          } as React.CSSProperties
        }
        classNames={{
          chevron: styles.chevron, // 버튼 내부 아이콘
          button_next: styles.button, // 다음 달 버튼
          button_previous: styles.button, // 이전 달 버튼
          caption_label: styles.caption_label, // 년 월 표시 라벨
        }}
        locale={ko}
      />
    </>
  );
};

export default Calender;
