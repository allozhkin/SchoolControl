import React from 'react';
import { useState } from 'react';
import styles from './checkboxWithLabel.module.scss';

interface CheckboxWithLabelProps {
  label: string;
}
const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.custom_checkbox}>
      <input className={styles.checkbox_input}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={styles.checkbox}></span>
      {label}
    </label>
  );
};

export default CheckboxWithLabel;
