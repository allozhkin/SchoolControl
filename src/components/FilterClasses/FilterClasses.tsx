import React, { useState } from 'react';
import styles from './FilterClasses.module.scss';
import BtnCheckbox from '../ui-kit/btnCheckbox/BtnCheckbox';

interface ClassOptions {
  label: string;
  value: string;
  children?: ClassOptions[];
}

// const classOptions: ClassOptions[] = [
//   { label: 'Начальная школа', value: 'elementary' },
//   { label: 'Средние классы', value: 'middle' },
//   { label: 'Старшие классы', value: 'high' },
// ];

const classOptions: ClassOptions[] = [
  {
    label: 'Начальная школа',
    value: 'elementary',
    children: [
      { label: '1-ые классы', value: '1st' },
      { label: '2-ые классы', value: '2nd' },
      { label: '3-и классы', value: '3rd' },
      { label: '4-ые классы', value: '4th' },
    ],
  },
  {
    label: 'Средние классы',
    value: 'middle',
    children: [
      { label: '5-ые классы', value: '5th' },
      { label: '6-ые классы', value: '6th' },
      { label: '7-ые классы', value: '7th' },
      { label: '8-ые классы', value: '8th' },
      { label: '9-ые классы', value: '9th' },
    ],
  },
  {
    label: 'Старшие классы',
    value: 'high',
    children: [
      { label: '10-ые классы', value: '10th' },
      { label: '11-ые классы', value: '11th' },
    ],
  },
];

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
      <button
        className={styles.filter__select} 
        onClick={toggleMenu}
      >
        Выберите классы
        <img 
          className={styles.filter__selectIcon}
          src={isOpen ? '/icons/triangleUp.svg' : '/icons/triangleDown.svg'} 
          alt='Dropdown Triangle' />
      </button>
      {isOpen && (
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
            <label className={styles.filter__gradeItem}>
              Все классы
              <input 
                type="checkbox" 
                checked={showClasses}
                onChange={toggleClasses}/>
            </label>
          </div>
          {showClasses && (
            <div>
              {classOptions.map((grade) => (
                <div key={grade.value}>
                  <label className={styles.filter__gradeItem}>
                    {grade.label}
                    <input type="checkbox" onClick={() => toggleSection(grade.value)}/>
                  </label>
                  {openSections[grade.value] && (
                    <div>
                      {grade.children?.map((child) => (
                        <label className={styles.filter__gradeItem} key={child.value}>
                          {child.label}
                          <input type="checkbox"/>
                        </label>
                      ))}
                    </div>
                  )}
                  
                </div>
              ))}
            </div>
          )}
          <div className={styles.filter__buttons} >
            <BtnCheckbox text="Сбросить" />
            <BtnCheckbox text="Применить" />
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterClasses
