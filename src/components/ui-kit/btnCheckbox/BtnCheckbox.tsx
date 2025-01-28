import React from 'react';
import styles from './btnCheckbox.module.scss';


interface BtnCheckboxProps {
  text: string;
}

const BtnCheckbox: React.FC<BtnCheckboxProps> = ({ text }) => {
  return (
    <button className={styles.btn_outline} type="submit">
      {text}
    </button>
  );
};

export default BtnCheckbox;
