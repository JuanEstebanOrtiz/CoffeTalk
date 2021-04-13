import React, { useState, useEffect } from 'react';
import MenuUser from './LayoutUser/MenuUser';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import ClienteAxios from '../../../config/servidor';
import { Carousel, CardDeck, Card, Row, Col } from 'react-bootstrap';

const User = () => {

    const [galerias, setGalerias] = useState([]);

    const ListarGalerias = async () => {
        const response = await ClienteAxios.get('/galerias')
        setGalerias(response.data.galerias)
    }


    const [productos, setProductos] = useState([]);

    const ListarProductos = async () => {
        const response = await ClienteAxios.get('/productos')
        setProductos(response.data.productos)
    }

    useEffect(() => {
        ListarProductos()
        ListarGalerias()
    }, [])

    return (
        <div>
            <MenuUser />

            <Carousel>
                {galerias ?
                    galerias.map(galeria => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={galeria.imagen}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                    :null}
            </Carousel>

            <h1>espacio</h1>

            <CardDeck>
                <Row>

                    {productos ?
                        productos.map(producto => {
                            return (
                                <Col md={4}>
                                    <Card>
                                        <Card.Img variant="top" src={producto.imagen} />
                                        <Card.Body>
                                            <Card.Title>{producto.nombre}</Card.Title>
                                            <Card.Text>{producto.descripcion}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            {producto.precio}
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                        : null}
                </Row>
            </CardDeck>

            <FooterPaginas />
        </div>
    )
}

export default User