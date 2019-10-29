import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    logo : null,
    copyrights: null,
    footerAbout : null,
    talkToUs : null,
    socialMedia : null,
    allStreams : null
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
                allStreams : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;