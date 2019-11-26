import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    logo : null,
    copyrights: null,
    footerAbout : null,
    talkToUs : null,
    socialMedia : null,
    allSubjects : {},
    allLocations : {},
    searchBanner : null,
    classCategories : null,
    classCapacities : null,
    instituteList : null
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_SITE_LOGO:
            return{
                ...state,
                logo : action.payload
            }
        case commonActionTypes.SET_COPYRIGHTS:
            return{
                ...state,
                copyrights : action.payload
            }
        case commonActionTypes.SET_FOOTER_ABOUT:
            return{
                ...state,
                footerAbout : action.payload
            }
        case commonActionTypes.SET_TALK_TO_US:
            return{
                ...state,
                talkToUs : action.payload
            }
        case commonActionTypes.SET_SOCIAL_MEDIA:
            return{
                ...state,
                socialMedia : action.payload
            }
        case commonActionTypes.SET_ALL_STREAMS:
            return{
                ...state,
                allSubjects : action.payload
            }
        case commonActionTypes.SET_ALL_LOCATIONS:
            return{
                ...state,
                allLocations : action.payload
            }
        case commonActionTypes.SET_SEARCH_BANNER:
            return{
                ...state,
                searchBanner : action.payload 
            }
        case commonActionTypes.SET_CLASS_CATEGORIES:
            return{
                ...state,
                classCategories : action.payload
            }
        case commonActionTypes.SET_CLASS_CAPACITIES:
            return{
                ...state,
                classCapacities : action.payload
            }
        case commonActionTypes.SET_INSTITUTE_LIST:
            return{
                ...state,
                instituteList : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;