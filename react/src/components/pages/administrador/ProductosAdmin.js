import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const ProductosAdmin = () => {

    const [productos, setProductos] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [AgregarProductos, setAgregarProductos] = useState({
        imagen: '', 
        nombre: '', 
        precio: '', 
        descripcion: '',
    });

    const [showModalEditar, setShowModalEditar] = useState(false);

    const [EditarProductos, setEditarProductos] = useState({
        idproductos: '',
        imagen: '', 
        nombre: '', 
        precio: '', 
        descripcion: '',
    })

    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarProductos({
            ...AgregarProductos,
            [e.target.name]: e.target.value
        })
    }

    const handleCloseEditarModal = () => setShowModalEditar(false);
    const handleShowEditarModal = () => setShowModalEditar(true);

    const onChangeEditar = (e) => {
        setEditarProductos({
            ...EditarProductos,
            [e.target.name]: e.target.value
        })
    }

    const ProductosSeleccionado = (productos) => {
        handleShowEditarModal();
        setEditarProductos(productos)
        console.log(productos)
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { imagen, nombre, precio, descripcion } = AgregarProductos

        if (
            imagen == '' ||
            nombre == '' ||
            precio == '' ||
            descripcion == ''
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { imagen, nombre, precio, descripcion }
            await ClienteAxios.post(`/productos`, datos)

        }
    }

    const FormularioAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="imagen"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

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
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="precio"
                    placeholder="precio"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="descripcion"
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

        const { idproductos, imagen, nombre, precio, descripcion } = EditarProductos

        if (
            imagen == '' ||
            nombre == '' ||
            precio == '' ||
            descripcion == ''
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { imagen, nombre, precio, descripcion }
            await ClienteAxios.put(`/productos/${idproductos}`, datos)

        }
    }

    const FormularioEditar = (
        <Form onSubmit={onSubmitEditar}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control
                    type="number"
                    name="idproductos"
                    disabled
                    placeholder="Id"
                    value={EditarProductos && EditarProductos.idproductos}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="imagen"
                    value={EditarProductos && EditarProductos.imagen}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={EditarProductos && EditarProductos.nombre}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={EditarProductos && EditarProductos.precio}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion"
                    value={EditarProductos && EditarProductos.descripcion}
                    onChange={onChangeEditar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Editar Producto
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
                <Modal.Title>Editar Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioEditar}</Modal.Body>
        </Modal>
    );

    const ListarProductos = async () => {
        const response = await ClienteAxios.get('/productos')
        setProductos(response.data.productos)
    }

    useEffect(() => {
        ListarProductos()
    }, [])

    const columnas = [
        {
            title: 'Id',
            field: 'idproductos'
        },
        {
            title: 'Imagen',
            field: 'imagen' 
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Precio',
            field: 'precio'
        },
        {
            title: 'Descripcion',
            field: 'descripcion'
        }
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Productos de Admin</h1>

            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShowAgregarModal}>
                        Agregar Nuevo Producto
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarProductos}>
                        Refrescar
                    </Button>
                </Col>
            </Row>
            {modalAgregar}
            {modalEditar}

            <MaterialTable
                columns={columnas}
                data={productos}
                title="Productos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick: (e, rowData) => {
                            ProductosSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/productos/${rowData.idproductos}`);
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

export default ProductosAdmin