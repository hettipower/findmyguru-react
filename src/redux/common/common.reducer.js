import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    logo : null
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_SITE_LOGO:
            return{
                ...state,
                logo : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;