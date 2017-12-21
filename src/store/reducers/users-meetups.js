import createReducer from './create-reducer';

// @TODO: This is shit
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
} from './../../actions/users-meetups';

const initialState = {
  list: [],
  isLoading: false,
  pendingDestroy: null,
}

const handlers = {};

handlers[CREATE_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[CREATE_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[CREATE_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
});

export default createReducer(initialState, handlers);