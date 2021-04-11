import React, { useState, useContext } from 'react';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext';
import { Form, Button } from 'react-bootstrap';
import NavbarMenu from '../layout/NavbarMenu';
import FooterPaginas from '../layout/FooterPaginas';

const Registro = () => {

    const autenticacionContext = useContext(AutenticacionContext);
    const {RegistroUsuario} = autenticacionContext

    const [ registro, setRegistro ] = useState({
        nombre: '',
        cell: '',
        direccion: '',
        email: '',
        password: '',
        idroles: 2
    });

    const onChange = (event) => {
        setRegistro({
            ...registro,
            [event.target.name] : event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { nombre, cell, direccion, email, password, idroles } = registro

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
            RegistroUsuario(datos)

        }
    }

    return (
        <div>
            <NavbarMenu />
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Cell</Form.Label>
                    <Form.Control 
                        type="text"
                        name="cell"
                        placeholder="Cell"
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control 
                        type="text"
                        name="direccion"
                        placeholder="Direccion"
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>

            {JSON.stringify(registro)}
            <FooterPaginas/>
        </div>
        
    )
}

export default Registro
