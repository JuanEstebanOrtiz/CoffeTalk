import React, { useReducer } from 'react';
import AutenticacionContext from './autenticacionContext';
import AutenticacionReducer from './autenticacionReducer';
import clienteAxios from '../../config/servidor';
import { LOGIN_EXITOSO, REGISTRO_EXITOSO } from '../../types';

const AutenticacionState = (props) => {

    const initializeState = {
        autenticado: false,
        usuario: null,
        rol: null
    }

    const [ state, dispatch ] = useReducer(AutenticacionReducer,  initializeState);

    const RegistroUsuario = (datos) =>{
        try {
            const usuarios = clienteAxios.post("/usuarios", datos)
            dispatch({
                type: REGISTRO_EXITOSO,
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    const LoginUsuario = async (datos) => {
        try{
            const usuarios = await clienteAxios.post("/usuarios/login", datos)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: usuarios.data.LoginUsuario[0]
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <AutenticacionContext.Provider value={{ autenticado: state.autenticado, 
                                                usuario: state.usuario, 
                                                rol: state.rol, 
                                                RegistroUsuario, 
                                                LoginUsuario }}>
            {props.children}
        </AutenticacionContext.Provider>
    )
}

export default AutenticacionState