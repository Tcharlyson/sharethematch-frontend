import { RSAA } from 'redux-api-middleware';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loginUser = (username, password) => ({
  [RSAA]: {
    endpoint: 'http://django.api/auth/',
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
    ]
  }
});