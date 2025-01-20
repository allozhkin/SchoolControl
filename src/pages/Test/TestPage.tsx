import React from 'react';
import styles from './test.module.scss';

const TestPage: React.FC = () => {
  return (
    <div className={styles.test__block}>
      <h2 className={styles.test__title}>Test Page </h2>
    </div>
  );
};

export default TestPage;
