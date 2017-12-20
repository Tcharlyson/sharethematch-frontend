import { RSAA } from 'redux-api-middleware';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const loginUser = (username, password) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/auth/',
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
    ]
  }
});

export const signup = (params) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users',
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
    types: [
      SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
    ]
  }
})