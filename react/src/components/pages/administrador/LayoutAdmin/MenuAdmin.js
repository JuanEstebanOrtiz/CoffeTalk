import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AutenticacionContext from '../../../../context/autenticacion/autenticacionContext';

const MenuAdmin = () => {

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
                <Navbar.Brand href="/admin">CoffeeTalk</Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link href="/usuariosAdmin">Usuarios</Nav.Link>
                    <Nav.Link href="/productosAdmin">Productos</Nav.Link>
                    <Nav.Link href="/cestasAdmin">Cestas</Nav.Link>
                    <Nav.Link href="/galeriasAdmin">Galeria</Nav.Link>
                    <Nav.Link href="">Grafica</Nav.Link>
                    <Nav.Link href="/comentariosAdmin">Comentarios</Nav.Link>
                    <Nav.Link href="/contactarnosAdmin">Contactarnos</Nav.Link>
                    <Nav.Link href="/terminosCondicionesAdmin">Terminos & Condiciones</Nav.Link>
                    <Button variant="primary" type="button" onClick={VolverIndex}>
                        Cerrar Sesion
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuAdmin