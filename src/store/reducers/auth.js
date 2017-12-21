import createReducer from './create-reducer';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from './../../actions/auth';

const initialState = {
  accessToken: undefined,
  isLoading: undefined,
  redirectLogin: false,
}

const handlers = {};

// Login reducers
handlers[LOGIN_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[LOGIN_SUCCESS] = (state, action) => ({
  ...state,
  accessToken: action.payload.token,
  isLoading: false,
});

handlers[LOGIN_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

// Signup reducers
handlers[SIGNUP_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[SIGNUP_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  redirectLogin: true,
});

handlers[SIGNUP_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[LOGOUT] = (state, action) => (initialState);

export default createReducer(initialState, handlers);
