import React, { useReducer } from 'react';
import AdminContext from './adminContext';
import AdminReducer from './adminReducer';
import clienteAxios from '../../config/servidor';
import { 
    LISTAR_USUARIOS, 
    AGREGAR_USUARIOS, 
    EDITAR_USUARIOS, 
    ELIMINAR_USUARIOS,

    LISTAR_PRODUCTOS,
    AGREGAR_PRODUCTOS, 
    EDITAR_PRODUCTOS, 
    ELIMINAR_PRODUCTOS,

    LISTAR_CESTA,  
    ELIMINAR_CESTA,

    LISTAR_GALERIAS,
    AGREGAR_GALERIAS,
    EDITAR_GALERIAS,
    ELIMINAR_GALERIAS,

    LISTAR_COMENTARIOS,
    AGREGAR_COMENTARIOS,
    ELIMINAR_COMENTARIOS,

    LISTAR_CONTACTARNOS,
    AGREGAR_CONTACTARNOS,
    EDITAR_CONTACTARNOS, 
    ELIMINAR_CONTACTARNOS,

    LISTAR_TERMINOSCONDICIONES,
    AGREGAR_TERMINOSCONDICIONES,
    EDITAR_TERMINOSCONDICIONES,
    ELIMINAR_TERMINOSCONDICIONES
} from '../../types';

const AdminState = (props) => {
    
    const initalizeState = {

        usuarios: null,
        productos: null,
        cesta: null,
        galerias: null,
        comentarios: null,
        contactarnos: null,
        terminoscondiciones: null

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


    const ListarProductos = async () => {
        try {
            const productos = await clienteAxios.get('/productos')
            dispatch ({
                type: LISTAR_PRODUCTOS,
                payload:  productos.data.productos
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarProductos = async (datos) => {
        try {
            await clienteAxios.post('/productos', datos)
            dispatch ({
                type: AGREGAR_PRODUCTOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const EditarProductos = async (datos, id) => {
        try {
            await clienteAxios.put(`/productos/${id}`, datos)
            dispatch ({
                type: EDITAR_PRODUCTOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarProductos = async (id) => {
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch ({
                type: ELIMINAR_PRODUCTOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }


    const ListarCestas = async () => {
        try {
            const cesta = await clienteAxios.get('/cestas')
            dispatch ({
                type: LISTAR_CESTA,
                payload:  cesta.data.cestas
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarCestas = async (id) => {
        try {
            await clienteAxios.delete(`/cestas/${id}`)
            dispatch ({
                type: ELIMINAR_CESTA,
            })
        } catch (e) {
            console.log(e.response)
        }
    }


    const ListarGalerias = async () => {
        try {
            const galeria = await clienteAxios.get('/galerias')
            dispatch ({
                type: LISTAR_GALERIAS,
                payload:  galeria.data.galeria
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarGalerias = async (datos) => {
        try {
            await clienteAxios.post('/galerias', datos)
            dispatch ({
                type: AGREGAR_GALERIAS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const EditarGalerias = async (datos, id) => {
        try {
            await clienteAxios.put(`/galerias/${id}`, datos)
            dispatch ({
                type: EDITAR_GALERIAS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarGalerias = async (id) => {
        try {
            await clienteAxios.delete(`/galerias/${id}`)
            dispatch ({
                type: ELIMINAR_GALERIAS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const ListarComentarios = async () => {
        try {
            const comentarios = await clienteAxios.get('/comentarios')
            dispatch ({
                type: LISTAR_COMENTARIOS,
                payload:  comentarios.data.comentarios
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarComentarios = async (datos) => {
        try {
            await clienteAxios.post('/comentarios', datos)
            dispatch ({
                type: AGREGAR_COMENTARIOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarComentarios = async (id) => {
        try {
            await clienteAxios.delete(`/comentarios/${id}`)
            dispatch ({
                type: ELIMINAR_COMENTARIOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const ListarContactarnos = async () => {
        try {
            const contactarnos = await clienteAxios.get('/contactarnos')
            dispatch ({
                type: LISTAR_CONTACTARNOS,
                payload:  contactarnos.data.contactarnos
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarContactarnos = async (datos) => {
        try {
            await clienteAxios.post('/Contactarnos', datos)
            dispatch ({
                type: AGREGAR_CONTACTARNOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const EditarContactarnos = async (datos, id) => {
        try {
            await clienteAxios.put(`/Contactarnos/${id}`, datos)
            dispatch ({
                type: EDITAR_CONTACTARNOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarContactarnos = async (id) => {
        try {
            await clienteAxios.delete(`/Contactarnos/${id}`)
            dispatch ({
                type: ELIMINAR_CONTACTARNOS,
            })
        } catch (e) {
            console.log(e.response)
        }
    }


    const ListarTerminosCondiciones = async () => {
        try {
            const terminos_condiciones = await clienteAxios.get('/terminos_condiciones')
            dispatch ({
                type: LISTAR_TERMINOSCONDICIONES,
                payload:  terminos_condiciones.data.terminos_condiciones
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const AgregarTerminosCondiciones = async (datos) => {
        try {
            await clienteAxios.post('/terminos_condiciones', datos)
            dispatch ({
                type: AGREGAR_TERMINOSCONDICIONES,
            })
        } catch (e) {
            console.log(e.response)
        }
    }

    const EditarTerminosCondiciones = async (datos, id) => {
        try {
            await clienteAxios.put(`/terminos_condiciones/${id}`, datos)
            dispatch ({
                type: EDITAR_TERMINOSCONDICIONES,
            })
        } catch (e) {
            console.log(e.response)
        }
    }
    
    const EliminarTerminosCondiciones = async (id) => {
        try {
            await clienteAxios.delete(`/terminos_condiciones/${id}`)
            dispatch ({
                type: ELIMINAR_TERMINOSCONDICIONES,
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
                EliminarUsuarios,

                productos: state.productos,
                ListarProductos,
                AgregarProductos,
                EditarProductos,
                EliminarProductos,

                cestas: state.cestas,
                ListarCestas,
                EliminarCestas,

                galeria: state.galeria,
                ListarGalerias,
                AgregarGalerias,
                EditarGalerias,
                EliminarGalerias,

                comentarios: state.comentarios,
                ListarComentarios,
                AgregarComentarios,
                EliminarComentarios,

                contactarnos: state.contactarnos,
                ListarContactarnos,
                AgregarContactarnos,
                EditarContactarnos,
                EliminarContactarnos,

                terminoscondiciones: state.terminoscondiciones,
                ListarTerminosCondiciones,
                AgregarTerminosCondiciones,
                EditarTerminosCondiciones,
                EliminarTerminosCondiciones
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminState;