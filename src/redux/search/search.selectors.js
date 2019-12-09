import { createSelector } from 'reselect';

const selectSearchAPI = state => state.search;

export const selectStream = createSelector(
    [selectSearchAPI],
    (search) => search.stream
);

export const selectSubject = createSelector(
    [selectSearchAPI],
    (search) => search.subject
);

export const selectDistrict = createSelector(
    [selectSearchAPI],
    (search) => search.district
);

export const selectCity = createSelector(
    [selectSearchAPI],
    (search) => search.city
);

export const selectBatch = createSelector(
    [selectSearchAPI],
    (search) => search.batch
);

export const selectMedium = createSelector(
    [selectSearchAPI],
    (search) => search.medium
);

export const selectClassCategory = createSelector(
    [selectSearchAPI],
    (search) => search.classCategory
);

export const selectClassCapacity = createSelector(
    [selectSearchAPI],
    (search) => search.classCapacity
);

export const selectInstitute = createSelector(
    [selectSearchAPI],
    (search) => search.institute
);

export const selectDay = createSelector(
    [selectSearchAPI],
    (search) => search.day
);

export const selectSession = createSelector(
    [selectSearchAPI],
    (search) => search.session
);

export const selectMinPrice = createSelector(
    [selectSearchAPI],
    (search) => search.minPrice
);

export const selectMaxPrice = createSelector(
    [selectSearchAPI],
    (search) => search.maxPrice
);

export const selectGuruName = createSelector(
    [selectSearchAPI],
    (search) => search.guruName
);

export const selectSchoolTeacher = createSelector(
    [selectSearchAPI],
    (search) => search.schoolTeacher
);

export const selectSorting = createSelector(
    [selectSearchAPI],
    (search) => search.sorting
);