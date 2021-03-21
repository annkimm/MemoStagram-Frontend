import { createReducer } from 'typesafe-actions';
import { ADD_LOCATION, REMOVE_LOCATION, locationAction } from '../actions/locationTypes';

export type locationState = {
    location: string;
}

const initialState: locationState = {
  location: '',
};

const userReducer = createReducer<locationState, locationAction>(initialState, {
  [ADD_LOCATION]: (state, action) => {
    const { location } = action.payload;
    return ({
      ...state, location,
    });
  },
  [REMOVE_LOCATION]: () => (initialState),
});

export default userReducer;
