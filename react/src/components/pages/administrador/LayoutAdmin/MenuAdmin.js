import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MenuAdmin = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/admin">Navbar</Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link href="/usuariosAdmin">Usuarios</Nav.Link>
                    <Nav.Link href="/productosAdmin">Productos</Nav.Link>
                    <Nav.Link href="/cestasAdmin">Cestas</Nav.Link>
                    <Nav.Link href="">Galeria</Nav.Link>
                    <Nav.Link href="">Comentarios</Nav.Link>
                    <Nav.Link href="">Contactarnos</Nav.Link>
                    <Nav.Link href="">Terminos & Condiciones</Nav.Link>
                    <Nav.Link href="">Cerrar Sesion</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuAdmin