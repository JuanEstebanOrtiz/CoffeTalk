import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const GaleriasAdmin = () => {

    const [galerias, setGalerias] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [AgregarGalerias, setAgregarGalerias] = useState({
        imagen: ''
    });

    const [showModalEditar, setShowModalEditar] = useState(false);

    const [EditarGalerias, setEditarGalerias] = useState({
        idgaleria: '',
        imagen: ''
    })

    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarGalerias({
            ...AgregarGalerias,
            [e.target.name]: e.target.value
        })
    }

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarGalerias({
            ...EditarGalerias,
            [e.target.name]: e.target.value
        })
    }

    const GaleriasSeleccionado = (galerias) => {
        handleShowEditarModal();
        setEditarGalerias(galerias)
        console.log(galerias)
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { imagen } = AgregarGalerias

        if (
            imagen == '' 
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { imagen }
            await ClienteAxios.post(`/galerias`, datos)

        }
    }

    const FormularioAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="Imagen"
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

        const { idgaleria, imagen } = EditarGalerias

        if (
            imagen == '' 
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { imagen }
            await ClienteAxios.put(`/galerias/${idgaleria}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id Terminos & Condiciones</Form.Label>
                <Form.Control
                    type="number"
                    name="idgaleria"
                    disabled
                    placeholder="Id"
                    value={EditarGalerias && EditarGalerias.idgaleria}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Politica</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="Imagen"
                    value={EditarGalerias && EditarGalerias.imagen}
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

    const ListarGalerias = async () => {
        const response = await ClienteAxios.get('/galerias')
        setGalerias(response.data.galerias)
    }

    useEffect(() => {
        ListarGalerias()
    }, [])

    const columnas = [
        {
            title: 'Id',
            field: 'idgaleria'
        },
        {
            title: 'Imagen',
            field: 'imagen'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Terminos & Condiciones de Admin</h1>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShowAgregarModal}>
                        Agregar Imagen
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarGalerias}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            {modalAgregar}
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={galerias}
                title="Galeria"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Imagen',
                        onClick: (e, rowData) => {
                            GaleriasSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Imagen',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/galerias/${rowData.idgaleria}`);
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

export default GaleriasAdmin