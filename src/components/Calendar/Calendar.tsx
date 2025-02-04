import { memo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './calendar.module.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  // Функция для форматирования месяца и года
  const formatMonthYear = (date: Date) => {
    const monthYear = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      year: 'numeric',
    }).format(date);

    // Убираем лишний суффикс "г." и делаем первую буквы месяца большой
    return monthYear.replace(' г.', '').replace(/^./, (char) => char.toUpperCase());
  };

  return (
    <div className={styles.wrapper}>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.calendar}
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ date }) => formatMonthYear(date)} // Форматирование месяца и года
      />
    </div>
  );
}

export default memo(CalendarComponent);
