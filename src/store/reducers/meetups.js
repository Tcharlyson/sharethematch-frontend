import createReducer from './create-reducer';

import {
  APPLY_REQUEST,
  APPLY_SUCCESS,
  APPLY_FAILURE,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from './../../actions';

const initialState = {
  list: [],
  isLoading: false,
}

const handlers = {};

handlers[FETCH_INITIAL_DATA] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.concat(action.payload.meetups.map(p => ({
    ...p,
    initialSeats: p.seats,
  }))),
  isLoading: false,
});

handlers[FETCH_INITIAL_DATA_ERROR] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[APPLY_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[APPLY_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.map(meetup => {
    if (meetup.id === action.payload.id) {
      return {
        ...meetup,
        seats: meetup.seats - 1,
      }
    }
    return meetup;
  }),
  isLoading: true,
});

handlers[APPLY_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

export default createReducer(initialState, handlers);
