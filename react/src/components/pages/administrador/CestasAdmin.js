import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const CestasAdmin = () => {

    const [cestas, setCestas] = useState([]);

    const ListarCestas = async () => {
        const response = await ClienteAxios.get('/cestas')
        setCestas(response.data.cestas)
    }

    useEffect(() => {
        ListarCestas()
    }, [])

    const columnas = [
        {
            title: 'Id',
            field: 'idcesta'
        },
        {
            title: 'Cantidad',
            field: 'cantidad' 
        },
        {
            title: 'Total',
            field: 'total'
        },
        {
            title: 'Productos',
            field: 'nombre_producto'
        },
        {
            title: 'Usuarios',
            field: 'nombre_usuario'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Cestas de Admin</h1>

            <Row>
                <Col>
                    <Button variant="secondary" onClick={ListarCestas}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            <MaterialTable
                columns={columnas}
                data={cestas}
                title="Cestas"
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Cesta',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/cestas/${rowData.idcesta}`);
                        }
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />

            <FooterPaginas />
        </div>
    )
}

export default CestasAdmin