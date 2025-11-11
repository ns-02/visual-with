import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import "react-day-picker/style.css";
import styles from "./Calender.module.css";

const Calender = () => {
  return (
    <DayPicker
      // classNames={
      // }
      locale={ko}
    />
  )
}

export default Calender;