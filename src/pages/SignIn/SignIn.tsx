import { useForm } from 'react-hook-form';
import styles from './signin.module.scss';

interface AuthForm {
  'email': string,
  'password': string,
}

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<AuthForm>({
    mode: 'onChange',
  })

  const onSubmit = (data:any) => {
    console.log(data);
  }

  const emailError = formState.errors.email?.message;
  const passError = formState.errors.password?.message;
  return (
      <>
        <div className={styles.login__wrapper}>
          <img className={styles.login__img} src="src/puplic/img/union.png" alt="logo" />
          <div className={styles.login_container}>
            <h1 className={styles.login__title}>SCHOOL CONTROL</h1>
            <p className={styles.login__text}>Вход</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className={styles.login__input} type="email" placeholder="Логин" {...register (
                'email', {
                  required: 'Введите логин',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                }
              )}/>
              {emailError && <p style={{color: 'tomato'}}>{emailError}</p>}
              <input className={styles.login__input} type="password" placeholder="Пароль"{...register('password', {
                  required: 'Введите пароль',
                  minLength: {
                      value: 6,
                      message: 'Пароль должен содержать минимум 6 символов'
                  }
                })} />
                {passError && <p style={{color: 'tomato'}}>{passError}</p>}
              <button className={styles.login__button}>Войти</button>
            </form>
          </div>
        </div>
      </>
  )
}

export default SignIn;