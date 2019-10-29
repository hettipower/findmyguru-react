import { homeActionTypes } from './home.types';

export const setHomePageBanner = mainBannerUrl => ({
    type : homeActionTypes.SET_HOME_PAGE_BANNER,
    payload : mainBannerUrl
});

export const setWelcomeText = welcomeText => ({
    type : homeActionTypes.SET_WELCOME_TEXT,
    payload : welcomeText
});

export const setServices = services => ({
    type : homeActionTypes.SET_SERVICES,
    payload : services
});

export const setCounterBannerUrl = counterBannerUrl => ({
    type : homeActionTypes.SET_COUNTER_BG,
    payload : counterBannerUrl
});

export const setFeatures = features => ({
    type : homeActionTypes.SET_FEATURES,
    payload : features
});

export const setTestimonials = testimonials => ({
    type : homeActionTypes.SET_TESTIMONIALS,
    payload : testimonials
});

export const setNewestGurus = newestGurus => ({
    type : homeActionTypes.SET_NEWEST_GURUS,
    payload : newestGurus
});

export const setGurusCount = gurusCount => ({
    type : homeActionTypes.SET_GURUS_COUNT,
    payload : gurusCount
});

export const setTotalClasses = totalClasses => ({
    type : homeActionTypes.SET_TOTAL_CLASSES,
    payload : totalClasses
});

export const setTotalVideos = totalVideos => ({
    type : homeActionTypes.SET_TOTAL_VIDEOS,
    payload : totalVideos
});