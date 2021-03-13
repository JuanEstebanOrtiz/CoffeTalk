import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/login">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
                    <Nav.Link href="/Registro">Registro</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavbarMenu