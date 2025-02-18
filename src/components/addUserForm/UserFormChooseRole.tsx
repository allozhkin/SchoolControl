import { useState } from 'react';
import PopupContainer from '../ui-kit/popupContainer/PopupContainer';
import { roles } from './AddUserFormRoles';
import styles from './AddUserForm.module.scss';

const UserFormChooseRole: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const toggleOption = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <PopupContainer isOpen={isOpen} name={'Выбрать роль'} onClick={toggleMenu}>
      <ul className={styles.menu__dropdown}>
        {roles.map((role) => (
          <li className={styles.menu__dropdown_item} key={role.value}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(role.value)}
                onChange={() => toggleOption(role.value)}
                className={styles.menu__dropdown_checkbox}
              />
              {role.value}
              <span className={styles.newCheckbox}></span>
            </label>
          </li>
        ))}
      </ul>
    </PopupContainer>
  );
};

export default UserFormChooseRole;
