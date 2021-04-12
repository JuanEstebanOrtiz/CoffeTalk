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

    const [showModalEditar, setShowModalEditar] = useState(false);

    const [EditarCestas, setEditarCestas] = useState({
        idcesta: '',
        imagen: '', 
        nombre: '', 
        precio: '', 
        descripcion: '',
    })

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarCestas({
            ...EditarCestas,
            [e.target.name]: e.target.value
        })
    }

    const CestasSeleccionado = (cestas) => {
        handleShowEditarModal();
        setEditarCestas(cestas)
        console.log(cestas)
    }

    const onSubmitEditar = async (event) => {
        event.preventDefault();

        const { idcesta, cantidad, total } = EditarCestas

        if (
            cantidad == '' ||
            total == '' 
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { cantidad, total }
            await ClienteAxios.put(`/productos/${idcesta}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control
                    type="number"
                    name="idcesta"
                    disabled
                    placeholder="Id"
                    value={EditarCestas && EditarCestas.idcesta}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                    type="number"
                    name="cantidad"
                    placeholder="cantidad"
                    value={EditarCestas && EditarCestas.cantidad}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Total</Form.Label>
                <Form.Control
                    type="number"
                    name="total"
                    placeholder="total"
                    value={EditarCestas && EditarCestas.total}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Editar Producto
            </Button>
        </Form>
    );

    const modalEditar = (
        <Modal show={showModalEditar} onHide={handleCloseEditarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioEditar}</Modal.Body>
        </Modal>
    );

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
            <h1>Productos de Admin</h1>

            <Row>
                <Col>
                    <Button variant="secondary" onClick={ListarCestas}>
                        Refrescar
                    </Button>
                </Col>
            </Row>
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={cestas}
                title="Cestas"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Cesta',
                        onClick: (e, rowData) => {
                            CestasSeleccionado(rowData);
                        }
                    },
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