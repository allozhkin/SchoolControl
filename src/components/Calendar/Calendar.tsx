import { memo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './calendar.module.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={styles.wrapper}>
      <Calendar onChange={onChange} value={value} className={styles.calendar} prev2Label={null} next2Label={null} />
    </div>
  );
}

export default memo(CalendarComponent);
