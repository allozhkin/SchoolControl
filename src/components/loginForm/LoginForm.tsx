import { useForm } from 'react-hook-form';
import styles from './login-form.module.scss';
import Icon from '../ui-kit/Icon/Icon';
// import Icon from '../ui-kit/Icon/Icon'; 

interface AuthForm {
  'email': string,
  'password': string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<AuthForm>({
    mode: 'onChange',
  })

  const onSubmit = (data:any) => {
    console.log(data);
  }

  // const emailError = formState.errors.email?.message;
  // const passError = formState.errors.password?.message;
  const errorMsg = (formState.errors.email?.message || formState.errors.password?.message)
  
  return (
      <>
        <div className={styles.login__wrapper}>
          {/* <Icon id="Union" width={48} height={48} /> */}
          <div className={styles.login_container}>
            {/* <h1 className={styles.login__title}>SCHOOL CONTROL</h1> */}
            <a className={styles.login__logo}><Icon id={'LogoSC'} width={36} height={15} /><span className={styles.login__logo_txt}>SCHOOL CONTROL</span></a>
            <h2 className={styles.login__title}>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className={styles.login__input} type="email" placeholder="Логин" {...register (
                'email', {
                  // required: 'Введите логин',
                  required: 'Заполните все поля',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    // message: 'Invalid email address',
                    message: 'Заполните все поля',
                  },
                }
              )}/>
              {/* {emailError && <p style={{color: 'tomato'}}>{emailError}</p>} */}
              <input className={styles.login__input} type="password" placeholder="Пароль"{...register('password', {
                  // required: 'Введите пароль',
                  required: 'Заполните все поля',
                  minLength: {
                      value: 6,
                      // message: 'Пароль должен содержать минимум 6 символов'
                      message: 'Заполните все поля'
                  }
                })} />
                {/* {passError && <p style={{color: 'tomato'}}>{passError}</p>} */}
              <button className={styles.login__button}>Войти</button>
              {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
            </form>
          </div>
        </div>
      </>
  )
}

export default LoginForm;