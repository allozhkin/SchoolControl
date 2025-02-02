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

  const emailError = formState.errors.email?.message;
  const passError = formState.errors.password?.message;

  
  return (
      <div className={styles.login__wrapper}>
        <a className={styles.login__logo} href="#" ><Icon className={styles.login__icon}  id={'LogoSC'} width={36} height={15} /><span className={styles.login__txt}>SCHOOL CONTROL</span></a>
        <div className={styles.login__container}>
          <div className={styles.login__box}>
            <h2 className={styles.login__title}>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.login__input_box}>
                  <input id='login' className={styles.login__input} type="email" required {...register (
                    'email', {
                      required: '*Заполните все поля',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '*Заполните все поля',
                      },
                    }
                  )}/>
                  <label className={styles.login__label} htmlFor='login'>Логин</label>
                  {emailError && <p className={styles.login__error}>{emailError}</p>}
              </div>
              <div className={styles.login__input_box}>
                  <input id='pass' className={styles.login__input} type="password" required {...register('password', {
                      required: '*Заполните все поля',
                      minLength: {
                          value: 6,
                          message: '*Заполните все поля'
                      }
                    })} />
                    <label className={styles.login__label} htmlFor='pass'>Пароль</label>
                    {passError && <p className={styles.login__error}>{passError}</p>}
              </div>
              <button className={styles.login__button}>Войти</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default LoginForm;