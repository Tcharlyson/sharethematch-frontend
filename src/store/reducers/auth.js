import createReducer from './create-reducer';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  RESET_REDIRECT,
} from './../../actions/auth';

const initialState = {
  accessToken: undefined,
  userId: undefined,
  isLoading: undefined,
  redirectLogin: false,
  errors: undefined,
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
  userId: action.payload.id,
  isLoading: false,
  errors: undefined,
});

handlers[LOGIN_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
  errors: "An error occured, please verify your id/password",
});

// Signup reducers
handlers[SIGNUP_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[SIGNUP_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  errors: undefined,
  redirectLogin: true,
});

handlers[SIGNUP_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
  errors: "An error occured, please verify your infos",
});

handlers[LOGOUT] = (state, action) => (initialState);

handlers[RESET_REDIRECT] = (state, action) => ({
  ...state,
  redirectLogin: false,
});

export default createReducer(initialState, handlers);
