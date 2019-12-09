import { classesActionTypes } from './classes.types';

const INITIAL_STATE = {
    classes : null,
}

const classesReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case classesActionTypes.SET_CLASSES:
            return{
                ...state,
                classes : action.payload
            }
        default:
            return state;
    }
}

export default classesReducer;