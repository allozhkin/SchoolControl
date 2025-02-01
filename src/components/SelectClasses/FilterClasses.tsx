import React, { useState } from 'react';

interface ClassGrade {
  label: string;
  value: string;
}

const classGrades: ClassGrade[] = [
  { label: 'Начальная школа', value: 'elementary' },
  { label: 'Средние классы', value: 'middle' },
  { label: 'Старшие классы', value: 'high' },
];

const FilterClasses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div 
        onClick={toggleMenu}
        style={{padding: '12px', cursor: 'pointer', border: '1px solid #000'}}
      >
        Выберите классы
      </div>
      {isOpen && (
        <div>
          <div>
            <input 
              type="text"
              placeholder="Поиск"
            />
            <img src="#" alt="Лупа" />
          </div>
          <div>
            <label htmlFor="">
              Все классы
            </label>
            <input type="checkbox" />
              {classGrades.map((grade) =>(
                <label key={grade.value} style={{ display: 'block', marginBottom: '5px' }}>
                  {grade.label}
                  <input type="checkbox" />
                </label>
              ))
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterClasses
