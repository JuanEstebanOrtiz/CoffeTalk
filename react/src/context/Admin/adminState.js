import React, { useReducer } from 'react';
import AdminContext from './adminContext';
import AdminReducer from './adminReducer';
import clienteAxios from '../../config/servidor';
import { 
    LISTAR_USUARIOS, 
    AGREGAR_USUARIOS, 
    EDITAR_USUARIOS, 
    ELIMINAR_USUARIOS
} from '../../types';

const AdminState = (props) => {
    
    const initalizeState = {

        usuarios: null

    }

    const [ state, dispatch ] = useReducer(AdminReducer, initalizeState)

    const ListarUsuarios = async () => {
        try {
            const usuarios = await clienteAxios.get('/usuarios')
            dispatch ({
                type: LISTAR_USUARIOS,
                payload:  usuarios.data.user
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarUsuarios = async (datos) => {
        try {
            await clienteAxios.post('/usuarios', datos)
            dispatch ({
                type: AGREGAR_USUARIOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const EditarUsuarios = async (datos, id) => {
        try {
            await clienteAxios.put(`/usuarios/${id}`, datos)
            dispatch ({
                type: EDITAR_USUARIOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarUsuarios = async (id) => {
        try {
            await clienteAxios.delete(`/usuarios/${id}`)
            dispatch ({
                type: ELIMINAR_USUARIOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    return (
        <AdminContext.Provider
            value = {{
                usuarios: state.usuarios,
                ListarUsuarios,
                AgregarUsuarios,
                EditarUsuarios,
                EliminarUsuarios
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminState;