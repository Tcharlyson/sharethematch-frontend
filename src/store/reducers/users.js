import createReducer from './create-reducer';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from './../../actions/meetups';

const initialState = {
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
  isLoading: true,
});

handlers[GET_USER_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

export default createReducer(initialState, handlers);
