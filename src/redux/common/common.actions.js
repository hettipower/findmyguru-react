import { commonActionTypes } from './common.types';

export const setSiteLogo = logo => ({
    type : commonActionTypes.SET_SITE_LOGO,
    payload : logo
});

export const setCopyrights = copyrights => ({
    type : commonActionTypes.SET_COPYRIGHTS,
    payload : copyrights
});

export const setFooterAbout = footerAbout => ({
    type : commonActionTypes.SET_FOOTER_ABOUT,
    payload : footerAbout
});

export const setTalkToUs = talkToUs => ({
    type : commonActionTypes.SET_TALK_TO_US,
    payload : talkToUs
});

export const setSocialMedia = socialMedia => ({
    type : commonActionTypes.SET_SOCIAL_MEDIA,
    payload : socialMedia
});

export const setAllSubjects = allSubjects => ({
    type : commonActionTypes.SET_ALL_STREAMS,
    payload : allSubjects
});

export const setAllLocations = allLocations => ({
    type : commonActionTypes.SET_ALL_LOCATIONS,
    payload : allLocations
});

export const setSearchBanner = searchBanner => ({
    type : commonActionTypes.SET_SEARCH_BANNER,
    payload : searchBanner
});

export const setClassCategories = classCategories => ({
    type : commonActionTypes.SET_CLASS_CATEGORIES,
    payload : classCategories
});

export const setClassCapacities = classCapacities => ({
    type : commonActionTypes.SET_CLASS_CAPACITIES,
    payload : classCapacities
});