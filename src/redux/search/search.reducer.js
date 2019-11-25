import { searchActionTypes } from './search.types';

const INITIAL_STATE = {
    stream : null,
    subject: null,
    district : null,
    city:null,
}

const searchReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case searchActionTypes.SET_STREAM:
            return{
                ...state,
                stream : action.payload
            }
        case searchActionTypes.SET_SUBJECT:
            return{
                ...state,
                subject : action.payload
            }
        case searchActionTypes.SET_DISTRICT:
            return{
                ...state,
                district : action.payload
            }
        case searchActionTypes.SET_CITY:
            return{
                ...state,
                city : action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;