import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../RTK/store';
import { setValue } from '../../RTK/slices/testSlice';
import styles from './Home.module.scss';
import Icon from '../../components/ui-kit/Icon/Icon';

const Home: React.FC = () => {
  
  const value = useSelector((state: RootState) => state.testReducer.value);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div className={styles.home__container}>
      <h1 className={styles.home__title}>Home Page</h1>
      <p className={styles.home__value}>Value: {value}</p>
      <button className={styles.home__btn} onClick={() => dispatch(setValue('this string is obtained from RTK slice'))}>
        SliceValueAdd 

        </button>
        <Icon id="iconDone" width={24} height={24} className={styles.test__icon}/>
        <svg >
  <use xlinkHref="/public/icons/sprite1.svg#Union"></use>
</svg>
    </div>

  );
};

export default Home;
