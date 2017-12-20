import { RSAA } from 'redux-api-middleware';

// APPLY
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = (userId) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users/' + userId,
    method: 'GET',
    types: [
      GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE
    ]
  }
});