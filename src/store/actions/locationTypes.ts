import { ActionType } from 'typesafe-actions';
import { actions } from './locationStore';

export const ADD_LOCATION = 'location/ADD_LOCATION';
export const REMOVE_LOCATION = 'location/REMOVE_LOCATION';

export type locationAction = ActionType<typeof actions>;
