import { useState } from "react";
import PopupContainer from "../ui-kit/popupContainer/PopupContainer";
import Calendar from "../Calendar/Calendar";
import FilterClasses from "../FilterClasses/FilterClasses";
import styles from './header.module.scss';
import NavBar from "../navBar/NavBar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h2 className={styles.header__title}>
                    Главная
                </h2>
                <div className={styles.header__selects_block}>

                    <PopupContainer
                        isOpen={isOpen}
                        name="Сегодня"
                        onClick={toggleMenu}
                    ><Calendar />
                    </PopupContainer>
                    <PopupContainer
                        name="Пустой"
                        children={undefined} isOpen={false} onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }} />
                    <FilterClasses />
                </div>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;





