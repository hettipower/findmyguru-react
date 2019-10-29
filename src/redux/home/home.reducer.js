import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    mainBannerUrl : null,
    welcomeText : '',
    services: null,
    counterBannerUrl : null,
    features: null,
    testimonials: null,
    newestGurus : null,
    gurusCount : 0,
    totalClasses : 0,
    totalVideos : 0
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
        case homeActionTypes.SET_NEWEST_GURUS:
            return{
                ...state,
                newestGurus : action.payload
            }
        case homeActionTypes.SET_GURUS_COUNT:
            return{
                ...state,
                gurusCount : action.payload
            }
        case homeActionTypes.SET_TOTAL_CLASSES:
            return{
                ...state,
                totalClasses : action.payload
            }
        case homeActionTypes.SET_TOTAL_VIDEOS:
            return{
                ...state,
                totalVideos : action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;