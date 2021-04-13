import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const TerminosCondicionesAdmin = () => {

    const [terminoscondiciones, setTerminosCondiciones] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [AgregarTerminosCondiciones, setAgregarTerminosCondiciones] = useState({
        politicas: ''
    });

    const [showModalEditar, setShowModalEditar] = useState(false);

    const [EditarTerminosCondiciones, setEditarTerminosCondiciones] = useState({
        idterminos_condiciones: '',
        politicas: ''
    })

    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarTerminosCondiciones({
            ...AgregarTerminosCondiciones,
            [e.target.name]: e.target.value
        })
    }

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarTerminosCondiciones({
            ...EditarTerminosCondiciones,
            [e.target.name]: e.target.value
        })
    }

    const TerminosCondicionesSeleccionado = (terminoscondiciones) => {
        handleShowEditarModal();
        setEditarTerminosCondiciones(terminoscondiciones)
        console.log(terminoscondiciones)
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { politicas } = AgregarTerminosCondiciones

        if (
            politicas == '' 
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { politicas }
            await ClienteAxios.post(`/terminos_condiciones`, datos)

        }
    }

    const FormularioAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Politicas</Form.Label>
                <Form.Control
                    type="text"
                    name="politicas"
                    placeholder="Politicas"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    );

    const onSubmitEditar = async (event) => {
        event.preventDefault();

        const { idterminos_condiciones, politicas } = EditarTerminosCondiciones

        if (
            politicas == '' 
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { politicas }
            await ClienteAxios.put(`/terminos_condiciones/${idterminos_condiciones}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id Terminos & Condiciones</Form.Label>
                <Form.Control
                    type="number"
                    name="idterminos_condiciones"
                    disabled
                    placeholder="Terminos & Condiciones"
                    value={EditarTerminosCondiciones && EditarTerminosCondiciones.idterminos_condiciones}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Politica</Form.Label>
                <Form.Control
                    type="text"
                    name="politicas"
                    placeholder="Politicas"
                    value={EditarTerminosCondiciones && EditarTerminosCondiciones.politicas}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Editar Contactarnos
            </Button>
        </Form>
    );

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Terminos & Condiciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioAgregar}</Modal.Body>
        </Modal>
    );

    const modalEditar = (
        <Modal show={showModalEditar} onHide={handleCloseEditarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Terminos & Condiciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioEditar}</Modal.Body>
        </Modal>
    );

    const ListarTerminosCondiciones = async () => {
        const response = await ClienteAxios.get('/terminos_condiciones')
        setTerminosCondiciones(response.data.terminos_condiciones)
    }

    useEffect(() => {
        ListarTerminosCondiciones()
    }, [])

    const columnas = [
        {
            title: 'Id Contactarnos',
            field: 'idterminos_condiciones'
        },
        {
            title: 'Politicas',
            field: 'politicas'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Terminos & Condiciones de Admin</h1>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShowAgregarModal}>
                        Agregar Nuevo Terminos & Condiciones
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarTerminosCondiciones}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            {modalAgregar}
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={terminoscondiciones}
                title="Terminos & Condiciones"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Terminos & Condiciones',
                        onClick: (e, rowData) => {
                            TerminosCondicionesSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Terminos & Condiciones',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/terminos_condiciones/${rowData.idterminos_condiciones}`);
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

export default TerminosCondicionesAdmin