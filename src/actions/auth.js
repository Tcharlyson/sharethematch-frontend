import { RSAA } from 'redux-api-middleware';
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';
export const REGISTER_REQUEST = '@@auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = '@@auth/REGISTER_FAILURE';
export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST';
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED';
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE';
export const LOGOUT = '@@auth/LOGOUT';

export const login = (username, password) => ({
  [RSAA]: {
    endpoint: 'http://django.api/auth/',
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
    ]
  }
})

export const logout = () => ({
  type: LOGOUT 
})

export const register = (username, email, password) => ({
  [RSAA]: {
    endpoint: 'http://django.api/api/users/',
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
    ]
  }
})

// export const refreshAccessToken = (token) => ({
//   [RSAA]: {
//     endpoint: '/api/auth/token/refresh/',
//     method: 'POST',
//     body: JSON.stringify({ refresh: token }),
//     headers: { 'Content-Type': 'application/json' },
//     types: [
//       TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
//     ]
//   }
// })