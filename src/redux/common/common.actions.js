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
})