import { createSelector } from 'reselect';

const selectCommonAPI = state => state.commonParams;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.logo
);

export const selectFooterAbout = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.footerAbout
);

export const selectTalkToUs = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.talkToUs
);

export const selectSocialMedia = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.socialMedia
);

export const selectCopyrights = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.copyrights
);