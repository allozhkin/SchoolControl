import React, { useState } from 'react';
import CheckboxWithLabel from '../ui-kit/checkboxWithLabel/CheckboxWithLabel';
import PopupContainer from '../ui-kit/popupContainer/PopupContainer';
import { classOptions, filterOptions } from './constants';
import styles from './FilterClasses.module.scss';

const FilterClasses: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({}); // Состояние для открытых секций
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]); // Состояние для выбранных классов 

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSection = (sectionKey: string) => {
    // Если секция открыта, закроем ее и наоборот
    const isOpen = openSections[sectionKey] || false;
    // Обновим состояние секций
    setOpenSections({
        ...openSections,
        [sectionKey]: !isOpen, // Инвертируем текущее состояние
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) { // Если чекбокс стоит, добавляем элемент в массив
      setSelectedClasses((prev) => [...prev, label]);
    } else { // Если чекбокс снят, удаляем элемент из массива
      setSelectedClasses((prev) => prev.filter((className) => className !== label));
    }
  };

  const filteredClassOptions = filterOptions(classOptions, inputValue);

  const isClassSelected = (label: string) => selectedClasses.includes(label);

  // const getName = () =>
  //   !isOpen && (selectedClasses.length > 0 || inputValue)
  //     ? `${selectedClasses.join(', ')}${inputValue}`
  //     : 'Выберите классы';  

  const resetFilters = () => {
    setShowClasses(false);
    setInputValue('');
    setSelectedClasses([]);
    setOpenSections({});
  };

  return (
    <PopupContainer 
      isOpen={isOpen} 
      name={!isOpen && selectedClasses.length > 0 ? selectedClasses.join(', ') : 'Выберите классы'} 
      onClick={toggleMenu}>
      <div className={styles.filter__search}>
        <input 
          className={styles.filter__searchInput}
          type="search"
          value={inputValue}
          placeholder="Поиск"
          onChange={handleSearchChange}
        />
        {!inputValue && (
          <img 
            className={styles.filter__searchIcon} 
            src='/icons/searchInput.svg' 
            alt="Search Icon" 
          />
        )}
      </div>
      <div className={styles.filter__allClasses}>
        <CheckboxWithLabel
          label='Все классы'
          checked={isClassSelected('Все классы')}
          onChange={(e) => handleCheckboxChange('Все классы', e.target.checked)}
          onLabelClick={() => setShowClasses(prev => !prev)}
        />
      </div>
      {showClasses && (
        <div className={styles.filter__grades}>
          {filteredClassOptions.map((grade) => (
            <div className={styles.filter__gradeItem} key={grade.value}>
              <CheckboxWithLabel
                label={grade.label}
                checked={isClassSelected(grade.label)}
                onLabelClick={() => toggleSection(grade.value)}
                onChange={(e) => {handleCheckboxChange(grade.label, e.target.checked)}}
                className={styles.filter__label_level_1}
              />
              {openSections[grade.value] && (
                <div>
                  {grade.children?.map((child) => (
                    <div key={child.value}>
                      <CheckboxWithLabel
                        label={child.label}
                        checked={isClassSelected(child.label)}
                        onLabelClick={() => toggleSection(child.value)}
                        onChange={(e) => {handleCheckboxChange(child.label, e.target.checked)}}
                        className={styles.filter__label_level_2}
                      />
                      {openSections[child.value] && (
                        <div>
                          {child.children?.map((subChild) => (
                            <div key={subChild.value}>
                              <CheckboxWithLabel
                                label={subChild.label}
                                checked={isClassSelected(subChild.label)}
                                onLabelClick={() => toggleSection(subChild.value)}
                                onChange={(e) => {handleCheckboxChange(subChild.label, e.target.checked)}}
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
        <button 
          className={styles.filter__buttonReset} 
          type="button"
          onClick={resetFilters}
        >
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

