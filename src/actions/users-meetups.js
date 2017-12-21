import { RSAA } from 'redux-api-middleware';

// CREATE
export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAILURE = 'CREATE_FAILURE';

export const create = (user, meetup) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users-meetups',
    method: 'POST',
    body: JSON.stringify({ user, meetup }),
    types: [
      CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE
    ]
  }
});