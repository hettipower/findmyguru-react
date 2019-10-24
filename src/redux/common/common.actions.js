import { commonActionTypes } from './common.types';

export const setSiteLogo = logo => ({
    type : commonActionTypes.SET_SITE_LOGO,
    payload : logo
});
