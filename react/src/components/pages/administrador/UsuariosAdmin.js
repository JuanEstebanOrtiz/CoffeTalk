import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal
} from 'react-bootstrap'

const UsuariosAdmin = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [ AgregarUsuarios, setAgregarUsuarios ] = useState({
        nombre: '',
        cell: '',
        direccion: '',
        email: '',
        password: '',
        idroles: 1
    });

    const [ showModalEditar, setShowModalEditar] = useState(false);

    const [ EditarUsuarios, setEditarUsuarios ] = useState({
        id:'',
        nombre: '',
        cell: '',
        direccion: '',
        email: '',
        password: '',
        idroles: 1
    })

    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarUsuarios({
            ...AgregarUsuarios,
            [e.target.name] : e.target.value
        })
    }

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarUsuarios({
            ...EditarUsuarios,
            [e.target.name] : e.target.value
        })
    }

    const UsuariosSeleccionado = (usuarios) => {
        handleShowEditarModal();
        setEditarUsuarios(usuarios)
        console.log(usuarios)
    }

    const onSubmitAgregar = async(event) => {
        event.preventDefault();

        const { nombre, cell, direccion, email, password, idroles } = AgregarUsuarios

        if (
            nombre == '' ||
            cell == '' ||
            direccion == '' ||
            email == '' ||
            password == ''
            ) {
                console.log('Todos los campos son obligatorios')
        } else {

            const datos = { nombre, cell, direccion, email, password, idroles }
            await ClienteAxios.post(`/usuarios`, datos)

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
                <Form.Label>Cell</Form.Label>
                <Form.Control
                    type="text"
                    name="cell"
                    placeholder="Cell"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Direccion"
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Roles</Form.Label>
                <Form.Control as="select" name="idroles" onChange={onChangeAgregar}>
                    <option>Roles</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrar
            </Button>
        </Form>
    );

    const onSubmitEditar = async(event) => {
        event.preventDefault();

        const { id, nombre, cell, direccion, email, password, idroles } = EditarUsuarios

        if (
            nombre == '' ||
            cell == '' ||
            direccion == '' ||
            email == '' ||
            password == ''
            ) {
                console.log('Todos los campos son obligatorios')
        } else {

            const datos = { nombre, cell, direccion, email, password, idroles }
            await ClienteAxios.put(`/usuarios/${id}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control
                    type="number"
                    name="id"
                    disabled
                    placeholder="Id"
                    value={EditarUsuarios && EditarUsuarios.id}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={EditarUsuarios && EditarUsuarios.nombre}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Cell</Form.Label>
                <Form.Control
                    type="text"
                    name="cell"
                    placeholder="Cell"
                    value={EditarUsuarios && EditarUsuarios.cell}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Direccion"
                    value={EditarUsuarios && EditarUsuarios.direccion}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={EditarUsuarios && EditarUsuarios.email}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={EditarUsuarios && EditarUsuarios.password}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Roles</Form.Label>
                <Form.Control as="select" value={EditarUsuarios && EditarUsuarios.idroles} name="idroles" onChange={onChangeEditar}>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Editar Usuario
            </Button>
        </Form>
    );

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioAgregar}</Modal.Body>
        </Modal>
    );

    const modalEditar = (
        <Modal show={showModalEditar} onHide={handleCloseEditarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioEditar}</Modal.Body>
        </Modal>
    );

    useEffect(async () => {
        const response = await ClienteAxios.get('/usuarios')
        setUsuarios(response.data.user)
    }, [])

    const columnas = [
        {
            title: 'Id',
            field: 'id'
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Celular',
            field: 'cell'
        },
        {
            title: 'Direccion',
            field: 'direccion'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Password',
            field: 'password'
        },
        {
            title: 'Roles',
            field: 'rol'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>usuarios de Admin</h1>

            <Button variant="primary" onClick={handleShowAgregarModal}>
                Agregar Nuevo Usuario
            </Button>
            {modalAgregar}
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={usuarios}
                title="Usuarios"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick: (e, rowData) => {
                            UsuariosSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/usuarios/${rowData.id}`);
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
            {JSON.stringify(EditarUsuarios)}

            <FooterPaginas />
        </div>
    )
}

export default UsuariosAdmin
