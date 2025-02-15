import Button from '../../button/Button';
import CheckboxWithLabel from './../checkboxWithLabel/CheckboxWithLabel';
import styles from './Checkboxes.module.scss';

const Checkboxes = () => {
  return (
    <div className={styles.checkboxField}>
      <CheckboxWithLabel label="Сегодня" />
      <CheckboxWithLabel label="Вчера" />
      <CheckboxWithLabel label="Конкретная дата" />
      <div className={styles.btnField}>
        <Button text={'Применить'} className={styles.btn} />
        <Button text={'Сбросить'} className={styles.btn} />
      </div>
    </div>
  );
};

export default Checkboxes;
