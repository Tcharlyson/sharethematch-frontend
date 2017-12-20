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
    headers: { 'Authorization': 'Token 54e49b258b99da3e81c1f30db12945cd51569dd5' },
    types: [
      APPLY_REQUEST, APPLY_SUCCESS, APPLY_FAILURE
    ]
  }
});

// FETCH INITIAL DATA
export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS';
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR';

export const fetchInitialData = () => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users',
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Token 54e49b258b99da3e81c1f30db12945cd51569dd5' },
    types: [
      FETCH_INITIAL_DATA, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_ERROR
    ]
  }
})