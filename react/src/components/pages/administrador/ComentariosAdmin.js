import React, { useState, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import MaterialTable from 'material-table';
import ClienteAxios from '../../../config/servidor';
import {
    Form, Button, Modal, Row, Col
} from 'react-bootstrap'

const ComentariosAdmin = () => {

    const [comentarios, setComentarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);

    const [AgregarComentarios, setAgregarComentarios] = useState({
        comentario: '',
        idproductos: '',
        idusuario: '',
    });


    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);

    const onChangeAgregar = (e) => {
        setAgregarComentarios({
            ...AgregarComentarios,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { comentario, idproductos, idusuario } = AgregarComentarios

        if (
            comentario == '' ||
            idproductos == '' ||
            idusuario == ''  
        ) {
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { comentario, idproductos, idusuario }
            await ClienteAxios.post(`/comentarios`, datos)

        }
    }

    const FormularioAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                    type="text"
                    name="comentario"
                    placeholder="Comentarios"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Productos</Form.Label>
                <Form.Control
                    id="idproductos"
                    name="idproductos"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeAgregar}
                >
                    <option value="">Seleccione el producto</option>
                    {productos ?
                        productos.map(producto => {
                            return (
                                <option
                                    value={producto.idproductos}
                                >
                                    {producto.nombre}
                                </option>
                            )
                        })
                    : null}
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Usuarios</Form.Label>
                <Form.Control
                    id="idusuario"
                    name="idusuario"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeAgregar}
                >
                    <option value="">Seleccione el Usuario</option>
                    {usuarios ?
                        usuarios.map(usuario => {
                            return (
                                <option
                                    value={usuario.idusuario}
                                >
                                    {usuario.nombre}
                                </option>
                            )
                        })
                    : null}
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    );

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Comentarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>{FormularioAgregar}</Modal.Body>
        </Modal>
    );

    const ListarProductos = async () => {
        const response = await ClienteAxios.get('/productos')
        setProductos(response.data.productos)
    }

    const ListarUsuarios = async () => {
        const response = await ClienteAxios.get('/usuarios')
        setUsuarios(response.data.user)
    }

    const ListarComentarios = async () => {
        const response = await ClienteAxios.get('/comentarios')
        setComentarios(response.data.comentarios)
    }

    useEffect(() => {
        ListarComentarios()
        ListarProductos()
        ListarUsuarios()
    }, [])

    const columnas = [
        {
            title: 'Id',
            field: 'idcomentario'
        },
        {
            title: 'Comentarios',
            field: 'comentario'
        },
        {
            title: 'Productos',
            field: 'nombre_producto'
        },
        {
            title: 'Nombre',
            field: 'nombre_usuario'
        },
    ]

    return (
        <div>
            <MenuAdmin />
            <h1>Comentarios de Admin</h1>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShowAgregarModal}>
                        Agregar Comentario
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarComentarios}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            {modalAgregar}

            <MaterialTable
                columns={columnas}
                data={comentarios}
                title="Comentarios"
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Comentario',
                        onClick: async (e, rowData) => {
                            await ClienteAxios.delete(`/comentarios/${rowData.idgaleria}`);
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

export default ComentariosAdmin