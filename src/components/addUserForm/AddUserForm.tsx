import Button from '../button/Button';
import styles from './AddUserForm.module.scss';
import Icon from '../ui-kit/Icon/Icon';
import Form from './Form';

const AddUserForm: React.FC = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form__header}>
        <h1 className={styles.form__heading}>Добавить пользователя</h1>
        <Button
          className={styles.buttonClose}
          text={
            <Icon
              id="iconClose"
              width={15}
              height={15}
              className={styles.buttonClose}
            />
          }
        />
      </div>
      <div className={styles.form__content}>
        <div className={styles.form__content_left}>

            <Icon
              id="iconUser"
              width={115}
              height={115}
              className={styles.userCard__icon}
            />

          <Button className={styles.form_btn} text={'Загрузить фото'} />
          <Button className={styles.form_btn} text={'Удалить'} />
        </div>
        <div className={styles.form__content_right}>
          <Form />
        </div>
      </div>
      <Button
        text={'Сохранить'}
        onClick={() => {
          console.log('Saved');
        }}
        type="submit"
        form='form'
        className={styles.form_container_button}
      />
    </div>
  );
};

export default AddUserForm;
