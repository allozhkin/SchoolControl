export interface DataRow {
  class: string;
  status: string;
  percentLeft:  number | string;
  amountLeft:  number | string;
  quarantineStatus: number | string;
}

export interface ITableProps { 
  className?: string;
}