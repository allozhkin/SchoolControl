import { useEffect, useState } from "react";
import ChartDonut from "../../components/chartDonut/ChartDonut";
import { useDispatch } from "react-redux";
import { setValue } from "../../RTK/slices/NavBarSlice";
import styles from "./admin-page.module.scss";
import TableMajor from "../../components/tableMajor/TableMajor";

interface IAdmin {
    chartTitle: string
}

const AdminPage: React.FC<IAdmin> = ({ chartTitle }) => {
    const dispatch = useDispatch();
    
    const [dataHead, setDataHead] = useState<any[]>([])
    const [dataBody,setDataBody] = useState<any[]>([])
    
    useEffect(() => {
        dispatch(setValue(true))
        
        const fetchData =  async () => {
            const res = await fetch(`${import.meta.env.VITE_ADMIN_GET}`);
            const data = await res.json();
           
            if (data) {
                setDataHead(Object.keys(data[0]))
                setDataBody(data)
            }

        }
        fetchData();
    }, [])

   
  
    return (
        <div className={styles.adminPage}>
            <div className={styles.adminPage__container}>
                

                <TableMajor className={styles.adminPage__table} headTitleArr={dataHead} bodyTitleArr={dataBody} />
                <div className={styles.adminPage__chart_block}>
                    <h3 className={styles.adminPage__chart_title}>{chartTitle}</h3>
                    <ChartDonut />

                </div>
            </div>
        </div>
    );
};

export default AdminPage;