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
});

handlers[SIGNUP_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
  errors: "An error occured, please verify your infos",
});

handlers[LOGOUT] = (state, action) => (initialState);

export default createReducer(initialState, handlers);
