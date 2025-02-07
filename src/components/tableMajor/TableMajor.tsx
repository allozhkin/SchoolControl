import React from 'react';
import Icon from '../ui-kit/Icon/Icon';
import { DataRow, ITableProps } from './types';
import { tableData } from './tableData';
import styles from './TableMajor.module.scss';

const TableMajor: React.FC<ITableProps> = ({ className }) => {
  return (
    <div className={`${styles.table} ${className}`}>
      <ul className={styles.table__header}>
        <li className={styles.table__header_title}>Класс</li>
        <li className={styles.table__header_title}>Статус</li>
        <li className={styles.table__header_title}>Процент отсутствующих</li>
        <li className={styles.table__header_title}>Количество отсутствующих</li>
        <li className={styles.table__header_title}>Карантинный статус</li>
      </ul>

      <ul className={styles.table_body}>
        {tableData.map((row: DataRow, index) => (
          <li className={styles.table__row} key={index}>
            <span className={styles.table__row_title}>{row.class}</span>
            <span className={styles.table__row_title}>{row.status}</span>
            <span className={styles.table__row_title}>{row.percentLeft}</span>
            <span className={styles.table__row_title}>{row.amountLeft}</span>
            <span className={styles.table__row_title}>
              <Icon id="icon_error" width={24} height={24} />
              {row.quarantineStatus}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableMajor;
