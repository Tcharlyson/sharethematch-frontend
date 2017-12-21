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
      APPLY_REQUEST, {
        type: APPLY_SUCCESS,
        meta: {
          id: meetup
        }
      }, APPLY_FAILURE
    ]
  }
});

// GET USER MEETUPS
export const GET_USERS_MEETUPS_REQUEST = 'GET_USERS_MEETUPS_REQUEST';
export const GET_USERS_MEETUPS_SUCCESS = 'GET_USERS_MEETUPS_SUCCESS';
export const GET_USERS_MEETUPS_FAILURE = 'GET_USERS_MEETUPS_FAILURE';

export const getUsersMeetups = () => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users-meetups',
    method: 'GET',
    types: [
      GET_USERS_MEETUPS_REQUEST, GET_USERS_MEETUPS_SUCCESS, GET_USERS_MEETUPS_FAILURE
    ]
  }
})