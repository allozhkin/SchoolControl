import React, { useState } from 'react';
import styles from './AddUserForm.module.scss';
import FilterClasses from '../FilterClasses/FilterClasses';
import UserFormChooseRole from './UserFormChooseRole';

interface FormData {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Проверка фамилии
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Фамилия обязательна';
    }

    // Проверка имени
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Имя обязательно';
    }

    // Проверка отчества
    if (!formData.middleName.trim()) {
      newErrors.middleName = 'Отчество обязательно';
    }

    // Проверка телефона
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    // Проверка электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Электронная почта обязательна';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный адрес электронной почты';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Форма успешно отправлена:', formData);
    }
  };

  return (
    <form id="form" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_item}>
        <input
          className={styles.form_item_input}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Фамилия"
        />
      </div>

      <div className={styles.form_item}>
        <input
          className={styles.form_item_input}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Имя"
        />
        <input
          className={styles.form_item_input}
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Отчество"
        />
      </div>

      <div className={styles.form_item}>
        <input
          className={styles.form_item_input}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
        />
        <input
          className={styles.form_item_input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Электронная почта"
        />
      </div>
      <div className={styles.form_selectors}>
        <FilterClasses />
        <UserFormChooseRole />
      </div>
    </form>
  );
};

export default Form;
