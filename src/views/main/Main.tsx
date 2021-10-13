import './main.css'
import { CardBasic } from './cardCreateActions/CardBasic';
import { TableGrid } from './cardCreateActions/Table';
import { columns, dataSource } from './cardCreateActions/table.config';


export const Main = () =>{

    console.log( dataSource );

    return(
        <div className="container">
            <div className="card-content">
                <CardBasic  text1 ={'Atajo para crear nueva campaña'} title={'Crear camapaña'} description={'Desde esta opcion podras crear nuevas campañas para tu negocio'} buttonName={'Crear campaña'} />
                <CardBasic  text1 ={'Atajo para crear contacto'} title={'Crear contacto'} description={'Desde esta opcion podra crear contactos nuevos para tus campañas'} buttonName={'Crear contacto'} />
                <CardBasic  text1 ={'Sender Scoring'} title={'9.36'} description={'Optimo'} buttonName={'Ir a dashboard'} />
            </div>
            <div className="report-content">
                <TableGrid columns={columns} dataSource={dataSource} />
            </div>
        </div>
    );
}

export default Main;