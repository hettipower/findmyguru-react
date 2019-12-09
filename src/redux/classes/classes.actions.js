import { classesActionTypes } from './classes.types';

export const setClasses = classes => ({
    type : classesActionTypes.SET_CLASSES,
    payload : classes
});