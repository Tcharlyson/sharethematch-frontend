import createReducer from './create-reducer';

// @TODO: This is shit
import {
  APPLY_REQUEST,
  APPLY_SUCCESS,
  APPLY_FAILURE,
  GET_USERS_MEETUPS_REQUEST,
  GET_USERS_MEETUPS_SUCCESS,
  GET_USERS_MEETUPS_FAILURE,
} from './../../actions/users-meetups';

const initialState = {
  list: [],
  isLoading: false,
  pendingDestroy: null,
}

const handlers = {};

handlers[APPLY_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[APPLY_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[APPLY_FAILURE] = (state, action) => ({
  ...state,
  isLoading: false,
});

handlers[GET_USERS_MEETUPS_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[GET_USERS_MEETUPS_SUCCESS] = (state, action) => ({
  ...state,
  meetups: action.payload,
  isLoading: false,
});

handlers[GET_USERS_MEETUPS_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

export default createReducer(initialState, handlers);