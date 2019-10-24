import { createSelector } from 'reselect';

const selectCommonAPI = state => state.commonParams;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.logo
);