import createReducer from './create-reducer';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from './../../actions/users';

const initialState = {
  list: [],
  user: {},
  isLoading: false,
}

const handlers = {};

handlers[GET_USER_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[GET_USER_SUCCESS] = (state, action) => ({
  ...state,
  user: action.payload,
  isLoading: false,
});

handlers[GET_USER_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[GET_USERS_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[GET_USERS_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[GET_USERS_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[DELETE_REQUEST] = (state, action) => ({
  ...state,
  pendingDestroy: action.meta.id,
});

handlers[DELETE_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.filter(user => {
    return user.id !== action.meta.id
  }),
  pendingDestroy: null,
});

handlers[DELETE_FAILURE] = (state, action) => ({
  ...state,
  pendingDestroy: null,
});

export default createReducer(initialState, handlers);
