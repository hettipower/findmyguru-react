import { createSelector } from 'reselect';

const selectHomeAPI = state => state.home;

export const selectHomeBannerUrl = createSelector(
    [selectHomeAPI],
    (home) => home.mainBannerUrl
);

export const selectWelcomeText = createSelector(
    [selectHomeAPI],
    (home) => home.welcomeText
);

export const selectServices = createSelector(
    [selectHomeAPI],
    (home) => home.services
);

export const selectCounterBanner = createSelector(
    [selectHomeAPI],
    (home) => home.counterBannerUrl
);

export const selectFeatures = createSelector(
    [selectHomeAPI],
    (home) => home.features
);

export const selectTestimonials = createSelector(
    [selectHomeAPI],
    (home) => home.testimonials
);

export const selectNewestGurus = createSelector(
    [selectHomeAPI],
    (home) => home.newestGurus
);

export const selectGurusCount = createSelector(
    [selectHomeAPI],
    (home) => home.gurusCount
);

export const selectTotalClasses = createSelector(
    [selectHomeAPI],
    (home) => home.totalClasses
);

export const selectTotalVideos = createSelector(
    [selectHomeAPI],
    (home) => home.totalVideos
);