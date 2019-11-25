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