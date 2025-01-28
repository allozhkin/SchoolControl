import React from 'react';
import styles from './test.module.scss';
import Modal from '../../components/modal/Modal';
import Icon from '../../components/ui-kit/Icon/Icon';
import LoginForm from '../../components/loginForm/LoginForm';
import CalendarComponent from '../../components/Calendar/Calendar';

const TestPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);


  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className={styles.test__block}>
      <h2 className={styles.test__title}>Test Page </h2>
      <button onClick={handleOpen} className={styles.test__btn_modal}>Modal open btn</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal content</h2>
      </Modal>
      <span>id="iconHelp-circle"</span>
      <Icon id="iconHelp-circle" width={24} height={24} className={styles.test__icon} />
      <span>id="iconCalendar"</span>
      <Icon id="iconCalendar" width={24} height={24} className={styles.test__icon} />
      <span>id="iconHome"</span>
      <Icon id="iconHome" width={24} height={24} className={styles.test__icon} />
      <span>id="iconUser"</span>
      <Icon id="iconUser" width={24} height={24} className={styles.test__icon} />
      <span>id="iconSettings"</span>
      <Icon id="iconSettings" width={24} height={24} className={styles.test__icon} />
      <span>id="iconStatistic"</span>
      <Icon id="iconStatistic" width={24} height={24} className={styles.test__icon} />
      <span>id="iconClose"</span>
      <Icon id="iconClose" width={24} height={24} className={styles.test__icon} />
      <span>id="iconDone"</span>
      <Icon id="iconDone" width={24} height={24} className={styles.test__icon} />
      <span>id="Union"</span>
      <Icon id="Union" width={24} height={24} className={styles.test__icon} />
      <LoginForm />
      <CalendarComponent />
    </div>

  );
};

export default TestPage;
