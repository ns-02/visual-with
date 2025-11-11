import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import styles from "./Calender.module.css";
import "react-day-picker/style.css";
import { useState } from "react";

const Calender = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      // 너비 조정 방법 (매우 중요)
      style={{
        '--rdp-day-width': '38px',
        '--rdp-day_button-width': '36px',
        '--rdp-day_button-height': '36px',
      } as React.CSSProperties}
      classNames={{
        chevron: styles.chevron,  // 버튼 내부 아이콘
        button_next: styles.button, // 다음 달 버튼
        button_previous: styles.button, // 이전 달 버튼
        caption_label: styles.caption_label,  // 년 월 표시 라벨
        // selected: styles.selected,  // 현재 선택된 날짜
      }}
      locale={ko}
      footer={
        selected ? `선택한 날짜: ${selected.toLocaleDateString()}` : "날짜를 선택하세요."
      }
    />
  )
}

export default Calender;