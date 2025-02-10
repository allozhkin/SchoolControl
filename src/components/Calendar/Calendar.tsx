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
      <h3 className={styles.title}>Выберите дату</h3>
        {/* Вывод выбранной даты */}
        <p className={styles.selectedDate}>
          {value instanceof Date 
            ? value.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'long' })
              .replace(/^./, (char) => char.toUpperCase()) 
            : 'Не выбрано'}
        </p>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.calendar}
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ date }) => formatMonthYear(date)} // Форматирование месяца и года
      />
      
      <div className={styles.button__box}>
        <button className={styles.button__calendar}>Закрыть</button>
        <button className={styles.button__calendar}>ОК</button>
      </div>
    </div>
  );
}

export default memo(CalendarComponent);
