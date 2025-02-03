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
                  type="checkbox" 
                  checked={showClasses}
                  onChange={toggleClasses}/>
              </label>
            </div>
            {showClasses && (
              <div className={styles.filter__grades}>
                {classOptions.map((grade) => (
                  <div className={styles.filter__gradeItem} key={grade.value}>
                    <label className={`${styles.filter__label} ${styles.filter__label_level_1}`}>
                      {grade.label}
                      <input type="checkbox" onClick={() => toggleSection(grade.value)}/>
                    </label>
                    {openSections[grade.value] && (
                      <div>
                        {grade.children?.map((child) => (
                          <div key={child.value}>
                            <label className={`${styles.filter__label} ${styles.filter__label_level_2}`}>
                              {child.label}
                              <input type="checkbox" onClick={() => toggleSection(child.value)}/>
                            </label>
                            {openSections[child.value] && (
                              <div>
                                {child.children?.map((subChild) => (
                                  <label className={`${styles.filter__label} ${styles.filter__label_level_3}`} key={subChild.value}>
                                    {subChild.label}
                                    <input type="checkbox" />
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

// const classOptions: ClassOptions[] = [
//   {
//     label: 'Начальная школа',
//     value: 'elementary',
//     children: [
//       { label: '1-ые классы', value: '1st' },
//       { label: '2-ые классы', value: '2nd' },
//       { label: '3-и классы', value: '3rd' },
//       { label: '4-ые классы', value: '4th' },
//     ],
//   },
//   {
//     label: 'Средние классы',
//     value: 'middle',
//     children: [
//       { label: '5-ые классы', value: '5th' },
//       { label: '6-ые классы', value: '6th' },
//       { label: '7-ые классы', value: '7th' },
//       { label: '8-ые классы', value: '8th' },
//       { label: '9-ые классы', value: '9th' },
//     ],
//   },
//   {
//     label: 'Старшие классы',
//     value: 'high',
//     children: [
//       { label: '10-ые классы', value: '10th' },
//       { label: '11-ые классы', value: '11th' },
//     ],
//   },
// ];
