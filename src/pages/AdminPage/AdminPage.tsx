
import { useEffect, useState } from "react";
import ChartDonut from "../../components/chartDonut/ChartDonut";
import { useDispatch } from "react-redux";
import { setValue } from "../../RTK/slices/NavBarSlice";
import styles from "./admin-page.module.scss";
import TableMajor from "../../components/tableMajor/TableMajor";
import FilterClasses from "../../components/FilterClasses/FilterClasses";
import PopupContainer from "../../components/ui-kit/popupContainer/PopupContainer";
import Calendar from "../../components/Calendar/Calendar";

interface IAdmin {
    chartTitle: string
}

const AdminPage: React.FC<IAdmin> = ({chartTitle}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    useEffect(() => {
        dispatch(setValue(true))
    }, [])
    return (
        <div className={styles.adminPage}>
            <div className={styles.adminPage__container}>
            <h2 className={styles.adminPage__title}>
                Главная
            </h2>
            <div className={styles.adminPage__selects_block}>
                
                <PopupContainer 
                    isOpen={isOpen} 
                    name="Сегодня" 
                    onClick={toggleMenu}    
                ><Calendar />
                </PopupContainer>
                <FilterClasses />
                <FilterClasses />
            </div>
            
            <TableMajor className={styles.adminPage__table} />
                <div className={styles.adminPage__chart_block}>
                    <h3 className={styles.adminPage__chart_title}>{chartTitle}</h3>
                    <ChartDonut />
               
            </div>
        </div>
        </div>
    );
};

export default AdminPage;