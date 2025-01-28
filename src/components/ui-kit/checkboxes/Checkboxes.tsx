import BtnCheckbox from './../btnCheckbox/BtnCheckbox';
import CheckboxWithLabel from './../checkboxWithLabel/CheckboxWithLabel';
import styles from './Checkboxes.module.scss';

const Checkboxes = () => {
  return (
    <div className={styles.checkboxField}>
      <CheckboxWithLabel label="Сегодня" />
      <CheckboxWithLabel label="Вчера" />
      <CheckboxWithLabel label="Конкретная дата" />
      <div className={styles.btnField} >
      <BtnCheckbox text="Применить" />
      <BtnCheckbox text="Сбросить" />
      </div>
    </div>
  );
};

export default Checkboxes;
