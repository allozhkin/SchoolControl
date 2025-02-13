import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.buttonReport} {...rest}>
      {text}
    </button>
  );
};

export default Button;
