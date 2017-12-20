// @TODO: Replace plain token with actual token from store
import { RSAA } from 'redux-api-middleware';

// FILTER
export const FILTER_CHANGE = 'FILTER_CHANGE';

export const filterChange = () => ({ type: FILTER_CHANGE })


// APPLY
export const APPLY_REQUEST = 'APPLY_REQUEST';
export const APPLY_SUCCESS = 'APPLY_SUCCESS';
export const APPLY_FAILURE = 'APPLY_FAILURE';

export const apply = (userId, meetupId) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users',
    method: 'POST',
    body: JSON.stringify({ userId, meetupId }),
    types: [
      APPLY_REQUEST, APPLY_SUCCESS, APPLY_FAILURE
    ]
  }
});

// FETCH INITIAL DATA
export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS';
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR';

export const fetchInitialData = (accessToken) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/meetups',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      FETCH_INITIAL_DATA, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_ERROR
    ]
  }
})

// CREATE
export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAILURE = 'CREATE_FAILURE';

export const create = (params) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/meetups',
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
    types: [
      CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE
    ]
  }
});

// DELETE
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const destroy = (id) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/meetups/' + id,
    method: 'DELETE',
    types: [
      DELETE_REQUEST,
      {
        type: DELETE_SUCCESS,
        meta: {
          id: id
        }
      },
      DELETE_FAILURE,
    ],
  }
});
