import React, { useState, useContext, useEffect } from 'react';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavbarMenu from '../layout/NavbarMenu';
import FooterPagina from '../layout/FooterPaginas';

const Login = () => {

    const autenticacionContext = useContext(AutenticacionContext);
    const {LoginUsuario, rol, autenticado} = autenticacionContext

    const history = useHistory();

    useEffect(() => {
        if(autenticado) {
            if(rol == 1){
                history.push("/admin")
            } else {
                history.push("/user")
            }
        }
    }, [autenticado, rol])

    const [ login, setLogin ] = useState({
        email: '',
        password: '',
    });

    const onChange = (event) => {
        setLogin({
            ...login,
            [event.target.name] : event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { email, password } = login

        if (
            email == '' ||
            password == ''
        ){
            console.log('Todos los campos son obligatorios')
        } else {

            const datos = { email, password }
            LoginUsuario(datos)

        } 
    }

    return (
        <div>
            <NavbarMenu />
            <Form onSubmit={onSubmit}>
        
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
                    Iniciar Sesion
                </Button>
            </Form>

            {JSON.stringify(login)}
            <FooterPagina />
        </div>
    )
}

export default Login