import createReducer from './create-reducer';

// @TODO: This is shit
import {
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from './../../actions/meetups';

import { APPLY_SUCCESS } from './../../actions/users-meetups'

const initialState = {
  list: [],
  isLoading: false,
  pendingDestroy: null,
  errors: undefined,
  redirectMeetups: false,
}

const handlers = {};

handlers[FETCH_INITIAL_DATA] = (state, action) => ({
  ...state,
  isLoading: true,
  redirectMeetups: false,
});

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[FETCH_INITIAL_DATA_ERROR] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[CREATE_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[CREATE_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.concat(action.payload),
  redirectMeetups: true,
  isLoading: false,
  errors: undefined,
});

handlers[CREATE_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
  errors: 'An error occured, please try again',
});

handlers[DELETE_REQUEST] = (state, action) => ({
  ...state,
  pendingDestroy: action.meta.id,
});

handlers[DELETE_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.filter(meetup => {
    return meetup.id !== action.meta.id
  }),
  pendingDestroy: null,
});

handlers[DELETE_FAILURE] = (state, action) => ({
  ...state,
  pendingDestroy: null,
});

handlers[APPLY_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.map(meetup => {
    if (meetup.id === action.meta.id) {
      return {
        ...meetup,
        places_available: meetup.places_available - 1,
        alreadyApplied: true,
      }
    }
    return meetup;
  }),
  isLoading: false,
});

export default createReducer(initialState, handlers);
