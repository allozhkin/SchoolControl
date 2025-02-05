import React, { useState } from 'react';
import { classOptions } from './constants';
import styles from './FilterClasses.module.scss';
import CheckboxWithLabel from '../ui-kit/checkboxWithLabel/CheckboxWithLabel';
import PopupContainer from '../ui-kit/popupContainer/popupContainer';

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
    <PopupContainer isOpen={isOpen} name='Выберите классы' onClick={toggleMenu}>
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
        <CheckboxWithLabel
          label='Все классы'
          checked={showClasses}
          onChange={toggleClasses}
        />
      </div>
      {showClasses && (
        <div className={styles.filter__grades}>
          {classOptions.map((grade) => (
            <div className={styles.filter__gradeItem} key={grade.value}>
              <CheckboxWithLabel
                label={grade.label}
                onChange={() => toggleSection(grade.value)}
                className={styles.filter__label_level_1}
              />
              {openSections[grade.value] && (
                <div>
                  {grade.children?.map((child) => (
                    <div key={child.value}>
                      <CheckboxWithLabel
                        label={child.label}
                        onChange={() => toggleSection(child.value)}
                        className={styles.filter__label_level_2}
                      />
                      {openSections[child.value] && (
                        <div>
                          {child.children?.map((subChild) => (
                            <div key={subChild.value}>
                              <CheckboxWithLabel
                                label={subChild.label}
                                onChange={() => toggleSection(subChild.value)}
                                className={styles.filter__label_level_3}
                              />
                            </div>
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
    </PopupContainer>
  )
}

export default FilterClasses

