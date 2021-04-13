import {
    LISTAR_USUARIOS,
    LISTAR_PRODUCTOS,
    LISTAR_CESTA,
    LISTAR_GALERIAS,
    LISTAR_COMENTARIOS,
    LISTAR_CONTACTARNOS,
    LISTAR_TERMINOSCONDICIONES
} from '../../types';


export default (state, action) => {

    switch (action.type) {
        
        default:
            return state

        case LISTAR_USUARIOS: 
            return {
                ...state, 
                usuarios: action.payload
            }

            case LISTAR_PRODUCTOS: 
            return {
                ...state, 
                productos: action.payload
            }

            case LISTAR_CESTA: 
            return {
                ...state, 
                productos: action.payload
            }

            case LISTAR_GALERIAS: 
            return {
                ...state, 
                productos: action.payload
            }

            case LISTAR_COMENTARIOS: 
            return {
                ...state, 
                productos: action.payload
            }

            case LISTAR_CONTACTARNOS: 
            return {
                ...state, 
                productos: action.payload
            }

            case LISTAR_TERMINOSCONDICIONES: 
            return {
                ...state, 
                productos: action.payload
            }
    }

}