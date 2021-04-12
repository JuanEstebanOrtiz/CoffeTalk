import {
    LISTAR_USUARIOS,
    LISTAR_PRODUCTOS,
    LISTAR_CESTA
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
    }

}