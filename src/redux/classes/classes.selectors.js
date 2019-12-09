import { createSelector } from 'reselect';

const selectClassesAPI = state => state.classes;

export const selectClasses = createSelector(
    [selectClassesAPI],
    (classes) => classes.classes
);