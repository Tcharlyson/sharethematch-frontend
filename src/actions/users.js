import { RSAA } from 'redux-api-middleware';

// GET USER
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

// GET USER LIST
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users',
    method: 'GET',
    types: [
      GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE
    ]
  }
})

// DELETE
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const destroy = (id) => ({
  [RSAA]: {
    endpoint: 'http://api.sharethematch.fr/users/' + id,
    method: 'DELETE',
    types: [
      {
        type: DELETE_REQUEST,
        meta: {
          id: id
        }
      },
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
