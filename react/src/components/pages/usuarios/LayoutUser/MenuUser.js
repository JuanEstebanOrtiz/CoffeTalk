import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AutenticacionContext from '../../../../context/autenticacion/autenticacionContext';

const MenuUser = () => {

    const history = useHistory();

    const autenticacionContext = useContext(AutenticacionContext)
    const { CerrarSesion } = autenticacionContext

    const VolverIndex = () => {
        CerrarSesion()
        history.push("/")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/user">CoffeeTalk</Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link href="">Contactarnos</Nav.Link>
                    <Button variant="primary" type="button" onClick={VolverIndex}>
                        Cerrar Sesion
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuUser