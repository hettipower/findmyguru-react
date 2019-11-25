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

export const selectAllSubjects = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.allSubjects
);

export const selectAllStreams = createSelector(
    [selectAllSubjects],
    allSubjects => Object.keys(allSubjects).map( key => key  )
);

export const selectAllLocations = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.allLocations
);

export const selectAllDistricts = createSelector(
    [selectAllLocations],
    allLocations => Object.values(allLocations).map( district => district  )
);