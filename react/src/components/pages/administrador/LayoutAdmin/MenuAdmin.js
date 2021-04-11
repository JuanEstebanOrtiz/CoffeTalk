import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MenuAdmin = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/admin">Navbar</Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link href="/usuariosAdmin">usuarios</Nav.Link>
                    <Nav.Link href="">Cerrar Sesion</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuAdmin