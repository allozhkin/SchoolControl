import React, { useState } from 'react';
import { classOptions } from './constants';
import styles from './FilterClasses.module.scss';

const FilterClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleClasses = () => setShowClasses(!showClasses);
  const toggleSection = (sectionKey: string) => {
    // Если секция открыта, закроем ее и наоборот
    const isOpen = openSections[sectionKey] || false;
    // Обновим состояние секций
    setOpenSections({
        ...openSections,
        [sectionKey]: !isOpen, // Инвертируем текущее состояние
    });
};

  return (
    <div className={styles.filter}>
      {!isOpen ?
        <button className={styles.filter__select} onClick={toggleMenu}>
          Выберите классы
          <img 
            className={styles.filter__selectIcon}
            src='/icons/triangleDown.svg'
            alt='Dropdown Triangle' />
        </button>
      :
        <>
          <button className={styles.filter__select_open} onClick={toggleMenu}>
            Выберите классы
            <img 
              className={styles.filter__selectIcon}
              src='/icons/triangleUp.svg' 
              alt='Dropdown Triangle' />
          </button>
          <div className={styles.filter__wrapper}>
            <div className={styles.filter__search}>
              <input 
                className={styles.filter__searchInput}
                type="text"
                placeholder="Поиск"
              />
              <img 
                className={styles.filter__searchIcon} 
                src='/icons/searchInput.svg' 
                alt="Search Icon" />
            </div>
            <div className={styles.filter__allClasses}>
              <label className={styles.filter__label}>
                Все классы
                <input
                  className={styles.filter__checkbox_input}
                  type="checkbox" 
                  checked={showClasses}
                  onChange={toggleClasses}
                />
                <span className={styles.filter__checkbox}></span>
              </label>
            </div>
            {showClasses && (
              <div className={styles.filter__grades}>
                {classOptions.map((grade) => (
                  <div className={styles.filter__gradeItem} key={grade.value}>
                    <label className={`${styles.filter__label} ${styles.filter__label_level_1}`}>
                      {grade.label}
                      <input 
                        className={styles.filter__checkbox_input}
                        type="checkbox" 
                        onChange={() => toggleSection(grade.value)}
                      />
                      <span className={styles.filter__checkbox}></span>
                    </label>
                    {openSections[grade.value] && (
                      <div>
                        {grade.children?.map((child) => (
                          <div key={child.value}>
                            <label className={`${styles.filter__label} ${styles.filter__label_level_2}`}>
                              {child.label}
                              <input 
                                className={styles.filter__checkbox_input}
                                type="checkbox" 
                                onChange={() => toggleSection(child.value)}
                              />
                              <span className={styles.filter__checkbox}></span>
                            </label>
                            {openSections[child.value] && (
                              <div>
                                {child.children?.map((subChild) => (
                                  <label className={`${styles.filter__label} ${styles.filter__label_level_3}`} key={subChild.value}>
                                    {subChild.label}
                                    <input 
                                      className={styles.filter__checkbox_input}
                                      type="checkbox" 
                                    />
                                    <span className={styles.filter__checkbox}></span>
                                  </label>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.filter__buttons} >
              <button className={styles.filter__buttonReset} type="submit">
                Сбросить
              </button>
              <button className={styles.filter__buttonApply} type="submit">
                Применить
              </button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default FilterClasses

