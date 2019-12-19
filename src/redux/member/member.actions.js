import { memberActionTypes } from './member.types';

export const setLoginUser = loginUser => ({
    type : memberActionTypes.SET_LOGIN_USER,
    payload : loginUser
});