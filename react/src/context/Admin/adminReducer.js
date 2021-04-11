import {
    LISTAR_USUARIOS,
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
    }

}