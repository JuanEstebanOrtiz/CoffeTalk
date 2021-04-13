import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const ContactarnosAdmin = () => {

    const [contactarnos, setContactarnos] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [AgregarContactarnos, setAgregarContactarnos] = useState({
        nombre: '',
        email: '',
        descripcion: ''
    });

    const [showModalEditar, setShowModalEditar] = useState(false);

    const [EditarContactarnos, setEditarContactarnos] = useState({
        idcontactarnos: '',
        nombre: '',
        email: '',
        descripcion: '',
    })

    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarContactarnos({
            ...AgregarContactarnos,
            [e.target.name]: e.target.value
        })
    }

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarContactarnos({
            ...EditarContactarnos,
            [e.target.name]: e.target.value
        })
    }

    const ContactarnosSeleccionado = (contactarnos) => {
        handleShowEditarModal();
        setEditarContactarnos(contactarnos)
        console.log(contactarnos)
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { nombre, email, descripcion } = AgregarContactarnos

        if (
            nombre == '' ||
            email == '' ||
            descripcion == ''
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { nombre, email, descripcion }
            await ClienteAxios.post(`/contactarnos`, datos)

        }
    }

    const FormularioAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrar
            </Button>
        </Form>
    );

    const onSubmitEditar = async (event) => {
        event.preventDefault();

        const { idcontactarnos, nombre, email, descripcion } = EditarContactarnos

        if (
            nombre == '' ||
            email == '' ||
            descripcion == ''
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { nombre, email, descripcion }
            await ClienteAxios.put(`/contactarnos/${idcontactarnos}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id Contactarnos</Form.Label>
                <Form.Control
                    type="number"
                    name="idcontactarnos"
                    disabled
                    placeholder="Id"
                    value={EditarContactarnos && EditarContactarnos.idcontactarnos}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={EditarContactarnos && EditarContactarnos.nombre}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={EditarContactarnos && EditarContactarnos.email}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion"
                    value={EditarContactarnos && EditarContactarnos.descripcion}
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
                <Modal.Title>Agregar Contactarnos</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioAgregar}</Modal.Body>
        </Modal>
    );

    const modalEditar = (
        <Modal show={showModalEditar} onHide={handleCloseEditarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Contactarnos</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioEditar}</Modal.Body>
        </Modal>
    );

    const ListarContactarnos = async () => {
        const response = await ClienteAxios.get('/contactarnos')
        setContactarnos(response.data.contactarnos)
    }

    useEffect(() => {
        ListarContactarnos()
    }, [])

    const columnas = [
        {
            title: 'Id Contactarnos',
            field: 'idcontactarnos'
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Descripcion',
            field: 'descripcion'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Contactarnos de Admin</h1>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShowAgregarModal}>
                        Agregar 
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarContactarnos}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            {modalAgregar}
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={contactarnos}
                title="Contactarnos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (e, rowData) => {
                            ContactarnosSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/contactarnos/${rowData.idcontactarnos}`);
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

export default ContactarnosAdmin