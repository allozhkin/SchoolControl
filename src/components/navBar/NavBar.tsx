import React from 'react';
import styles from './nav-bar.module.scss';
import Icon from '../ui-kit/Icon/Icon';
import UserCard from '../ui-kit/userCard/UserCard';
import { useSelector } from 'react-redux';
const itemsArr = [
    { iconName: 'iconHome', text: 'Главная' },
    { iconName: 'reports', text: 'Отчеты' },
    { iconName: 'iconUser', text: 'Пользователи' },
    { iconName: 'iconHelp', text: 'Помощь' }
];

const NavBar: React.FC = () => {
    const navBarState = useSelector((state: any) => state.navBarState.value);
    const Item: JSX.Element[] = itemsArr.map((item, index) => (
        <li key={index} className={styles.navBar__item}>
            <a href="#!" className={styles.navBar__item_link}>
                <Icon id={item.iconName} width={28} height={28} className={styles.navBar__item_icon} />
                <span className={styles.navBar__item_txt}>{item.text}</span>
            </a>
        </li>
    )
    );

    return (
        navBarState &&
        <nav className={styles.navBar}>
            <div>
                
            </div>
            <a className={styles.navBar__logo_link}><Icon id={'LogoSC'} width={36} height={15} /><span className={styles.navBar__logo_txt}>School ControL</span></a>
            <ul className={styles.navBar__list}>{Item}</ul>
            <UserCard name='Иванова Мария Ивановна' className={styles.navBar__user_card}/>
        </nav>
    )
}

export default NavBar;  