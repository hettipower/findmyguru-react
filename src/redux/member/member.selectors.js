import { createSelector } from 'reselect';

const selectMemberAPI = state => state.member;

export const selectLoginUser = createSelector(
    [selectMemberAPI],
    (member) => member.loginUser
);