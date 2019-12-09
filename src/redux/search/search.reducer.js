import { searchActionTypes } from './search.types';

const INITIAL_STATE = {
    stream : null,
    subject: null,
    district : null,
    city:null,
    batch:null,
    medium:null,
    classCategory:null,
    classCapacity:null,
    institute:null,
    day:null,
    session:null,
    minPrice:null,
    maxPrice:null,
    guruName:null,
    schoolTeacher:null,
    sorting: 'DESC'
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
        case searchActionTypes.SET_BATCH:
            return{
                ...state,
                batch : action.payload
            }
        case searchActionTypes.SET_MEDIUM:
            return{
                ...state,
                medium : action.payload
            }
        case searchActionTypes.SET_CLASS_CATEGORY:
            return{
                ...state,
                classCategory : action.payload
            }
        case searchActionTypes.SET_CLASS_CAPACITY:
            return{
                ...state,
                classCapacity : action.payload
            }
        case searchActionTypes.SET_INSTITUTE:
            return{
                ...state,
                institute : action.payload
            }
        case searchActionTypes.SET_DAY:
            return{
                ...state,
                day : action.payload
            }
        case searchActionTypes.SET_SESSION:
            return{
                ...state,
                session : action.payload
            }
        case searchActionTypes.SET_MIN_PRICE:
            return{
                ...state,
                minPrice : action.payload
            }
        case searchActionTypes.SET_MAX_PRICE:
            return{
                ...state,
                maxPrice : action.payload
            }
        case searchActionTypes.SET_GURU_NAME:
            return{
                ...state,
                guruName : action.payload
            }
        case searchActionTypes.SET_SCHOOL_TEACHER:
            return{
                ...state,
                schoolTeacher : action.payload
            }
        case searchActionTypes.SET_SORTING:
            return{
                ...state,
                sorting : action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;