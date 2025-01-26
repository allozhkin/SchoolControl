import React from 'react';
import { useState } from 'react';
import 'checkboxWithLabel.module.scss';

interface CheckboxWithLabelProps {
  label: string;
}
const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default CheckboxWithLabel;
