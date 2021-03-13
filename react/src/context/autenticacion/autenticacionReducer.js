import { LOGIN_EXITOSO } from '../../types';

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
    }

}