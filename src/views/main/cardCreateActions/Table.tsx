
import 'antd/dist/antd.css';
import { Table } from 'antd';

export const TableGrid = ({ columns, dataSource }:any) => { 

    return(
        <Table columns={columns} dataSource={dataSource} />
    )
}