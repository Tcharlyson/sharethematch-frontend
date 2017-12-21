import { RSAA } from 'redux-api-middleware';

// CREATE
export const APPLY_REQUEST = 'APPLY_REQUEST';
export const APPLY_SUCCESS = 'APPLY_SUCCESS';
export const APPLY_FAILURE = 'APPLY_FAILURE';

export const create = (user, meetup) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users-meetups',
    method: 'POST',
    body: JSON.stringify({ user, meetup }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      APPLY_REQUEST, APPLY_SUCCESS, APPLY_FAILURE
    ]
  }
});