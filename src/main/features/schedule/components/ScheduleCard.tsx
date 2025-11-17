import { Check, X } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './ScheduleCard.module.css';

interface Props {
  title?: string;
  date?: string;
  time?: string;
  state?: string;
}

const ScheduleCard = ({ title, date, time, state }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <p>{title}</p>
        <div className={styles.datetime}>
          <span style={{ fontSize: "15px", color: "#555" }} >{date}</span>
          <span style={{ fontSize: "15px", color: "#555" }} >{time}</span>
        </div>
      </div>
      <div className={styles.state}>
        <label className={styles.label}>{state}</label>
      </div>
    </div>
  )
}

export default ScheduleCard;