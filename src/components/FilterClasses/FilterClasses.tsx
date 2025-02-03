import React, { useState } from 'react';
import styles from './FilterClasses.module.scss';

interface ClassOptions {
  label: string;
  value: string;
  children?: ClassOptions[];
}

const classOptions: ClassOptions[] = [
  {
    label: 'Начальная школа',
    value: 'elementary',
    children: [
      {
        label: '1-ые классы',
        value: '1st',
        children: [
          { label: '1А', value: '1A' },
          { label: '1Б', value: '1B' },
          { label: '1В', value: '1C' },
          { label: '1Г', value: '1D' },
        ],
      },
      {
        label: '2-ые классы',
        value: '2nd',
        children: [
          { label: '2А', value: '2A' },
          { label: '2Б', value: '2B' },
          { label: '2В', value: '2C' },
          { label: '2Г', value: '2D' },
        ],
      },
      {
        label: '3-ие классы',
        value: '3rd',
        children: [
          { label: '3А', value: '3A' },
          { label: '3Б', value: '3B' },
          { label: '3В', value: '3C' },
          { label: '3Г', value: '3D' },
        ],
      },
      {
        label: '4-ые классы',
        value: '4th',
        children: [
          { label: '4А', value: '4A' },
          { label: '4Б', value: '4B' },
          { label: '4В', value: '4C' },
          { label: '4Г', value: '4D' },
        ],
      },
    ],
  },
  {
    label: 'Средняя школа',
    value: 'middle',
    children: [
      {
        label: '5-ые классы',
        value: '5th',
        children: [
          { label: '5А', value: '5A' },
          { label: '5Б', value: '5B' },
          { label: '5В', value: '5C' },
          { label: '5Г', value: '5D' },
        ],
      },
      {
        label: '6-ые классы',
        value: '6th',
        children: [
          { label: '6А', value: '6A' },
          { label: '6Б', value: '6B' },
          { label: '6В', value: '6C' },
          { label: '6Г', value: '6D' },
        ],
      },
      {
        label: '7-ые классы',
        value: '7th',
        children: [
          { label: '7А', value: '7A' },
          { label: '7Б', value: '7B' },
          { label: '7В', value: '7C' },
          { label: '7Г', value: '7D' },
        ],
      },
      {
        label: '8-ые классы',
        value: '8th',
        children: [
          { label: '8А', value: '8A' },
          { label: '8Б', value: '8B' },
          { label: '8В', value: '8C' },
          { label: '8Г', value: '8D' },
        ],
      },
      {
        label: '9-ые классы',
        value: '9th',
        children: [
          { label: '9А', value: '9A' },
          { label: '9Б', value: '9B' },
          { label: '9В', value: '9C' },
          { label: '9Г', value: '9D' },
        ],
      },
    ],
  },
  {
    label: 'Старшая школа',
    value: 'high',
    children: [
      {
        label: '10-ые классы',
        value: '10th',
        children: [
          { label: '10А', value: '10A' },
          { label: '10Б', value: '10B' },
          { label: '10В', value: '10C' },
          { label: '10Г', value: '10D' },
        ],
      },
      {
        label: '11-ые классы',
        value: '11th',
        children: [
          { label: '11А', value: '11A' },
          { label: '11Б', value: '11B' },
          { label: '11В', value: '11C' },
          { label: '11Г', value: '11D' },
        ],
      },
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
                        <div key={child.value}>
                          <label className={styles.filter__gradeItem}>
                            {child.label}
                            <input type="checkbox" onClick={() => toggleSection(child.value)}/>
                          </label>
                          {openSections[child.value] && (
                            <div>
                              {child.children?.map((subChild) => (
                                <label className={styles.filter__gradeItem} key={subChild.value}>
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
      )}
    </div>
  )
}

export default FilterClasses



// const classOptions: ClassOptions[] = [
//   { label: 'Начальная школа', value: 'elementary' },
//   { label: 'Средние классы', value: 'middle' },
//   { label: 'Старшие классы', value: 'high' },
// ];

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
