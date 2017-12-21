import createReducer from './create-reducer';

// @TODO: This is shit
import {
  APPLY_REQUEST,
  APPLY_SUCCESS,
  APPLY_FAILURE,
} from './../../actions/users-meetups';

const initialState = {
  list: [],
  isLoading: false,
  pendingDestroy: null,
}

const handlers = {};

handlers[APPLY_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[APPLY_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[APPLY_FAILURE] = (state, action) => ({
  ...state,
  isLoading: false,
});

export default createReducer(initialState, handlers);