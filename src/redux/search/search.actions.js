import { searchActionTypes } from './search.types';

export const setStream = stream => ({
    type : searchActionTypes.SET_STREAM,
    payload : stream
});

export const setSubject = subject => ({
    type : searchActionTypes.SET_SUBJECT,
    payload : subject
});

export const setDistrict = district => ({
    type : searchActionTypes.SET_DISTRICT,
    payload : district
});

export const setCity = city => ({
    type : searchActionTypes.SET_CITY,
    payload : city
});

export const setBatch = batch => ({
    type : searchActionTypes.SET_BATCH,
    payload : batch
});

export const setMedium = medium => ({
    type : searchActionTypes.SET_MEDIUM,
    payload : medium
});

export const setClassCategory = classCategory => ({
    type : searchActionTypes.SET_CLASS_CATEGORY,
    payload : classCategory
});

export const setClassCapacity = classCapacity => ({
    type : searchActionTypes.SET_CLASS_CAPACITY,
    payload : classCapacity
});

export const setInstitute = institute => ({
    type : searchActionTypes.SET_INSTITUTE,
    payload : institute
});

export const setDay = day => ({
    type : searchActionTypes.SET_DAY,
    payload : day
});

export const setSession = session => ({
    type : searchActionTypes.SET_SESSION,
    payload : session
});

export const setMinPrice = minPrice => ({
    type : searchActionTypes.SET_MIN_PRICE,
    payload : minPrice
});

export const setMaxPrice = maxPrice => ({
    type : searchActionTypes.SET_MAX_PRICE,
    payload : maxPrice
});

export const setGuruName = guruName => ({
    type : searchActionTypes.SET_GURU_NAME,
    payload : guruName
});

export const setSchoolTeacher = schoolTeacher => ({
    type : searchActionTypes.SET_SCHOOL_TEACHER,
    payload : schoolTeacher
});

export const setSorting = sorting => ({
    type : searchActionTypes.SET_SORTING,
    payload : sorting
});