import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/login">CoffeeTalk</Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
                    <Nav.Link href="/Registro">Registro</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarMenu