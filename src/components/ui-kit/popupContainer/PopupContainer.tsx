import React, { ReactNode } from 'react';
import styles from './PopupContainer.module.scss';

interface PopupContainerProps {
  isOpen: boolean;
  name: string;
  onClick: () => void;
  children: ReactNode;
}

const PopupContainer: React.FC<PopupContainerProps> = ({ isOpen, name, onClick, children }) => {

  const dropdownButton = (isOpen: boolean) => (
    <button 
      className={isOpen ? styles.popup__select_open : styles.popup__select} 
      onClick={onClick}
    >
      {name}
      <img 
        className={styles.popup__selectIcon}
        src={isOpen ? '/icons/triangleUp.svg' : '/icons/triangleDown.svg'}
        alt='Dropdown Triangle' 
      />
    </button>
  )

  return (
    <div className={styles.popup}>
      {dropdownButton(isOpen)}
      {isOpen && (
        <div className={styles.popup__wrapper}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PopupContainer;