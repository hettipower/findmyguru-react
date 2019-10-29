import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    mainBannerUrl : null,
    welcomeText : '',
    services: null,
    counterBannerUrl : null,
    features: null,
    testimonials: null
}

const homeReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case homeActionTypes.SET_HOME_PAGE_BANNER:
            return{
                ...state,
                mainBannerUrl : action.payload
            }
        case homeActionTypes.SET_WELCOME_TEXT:
            return {
                ...state,
                welcomeText : action.payload
            }
        case homeActionTypes.SET_SERVICES:
            return{
                ...state,
                services : action.payload
            }
        case homeActionTypes.SET_COUNTER_BG:
            return {
                ...state,
                counterBannerUrl : action.payload
            }
        case homeActionTypes.SET_FEATURES:
            return{
                ...state,
                features : action.payload
            }
        case homeActionTypes.SET_TESTIMONIALS:
            return {
                ...state,
                testimonials : action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;