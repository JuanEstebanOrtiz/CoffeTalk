import { LOGIN_EXITOSO, CERRAR_SESION } from '../../types';

export default(state, action) => {
    
    switch (action.type) {

        default:
            return state

        case  LOGIN_EXITOSO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                rol: action.payload.idroles
            }

        case CERRAR_SESION:
            return {
                ...state,
                usuario: null,
                rol: null,
                autenticado: false
            }
    }

}