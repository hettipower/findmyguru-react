import { memberActionTypes } from './member.types';

const INITIAL_STATE = {
    loginUser : null,
}

const memberReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case memberActionTypes.SET_LOGIN_USER:
            return{
                ...state,
                loginUser : action.payload
            }
        default:
            return state;
    }
}

export default memberReducer;