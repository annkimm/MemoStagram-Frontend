import { createAction } from 'typesafe-actions';
import { locationState } from 'store/reducers/locationReducer';
import { ADD_LOCATION, REMOVE_LOCATION } from './locationTypes';

export const addLocation = createAction(ADD_LOCATION)<locationState>();
export const removeLocation = createAction(REMOVE_LOCATION)();

export const actions = { addLocation, removeLocation };
