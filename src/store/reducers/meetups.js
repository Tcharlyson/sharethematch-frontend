import createReducer from './create-reducer';

// @TODO: This is shit
import {
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from './../../actions/meetups';

const initialState = {
  list: [],
  isLoading: false,
  pendingDestroy: null,
  errors: undefined,
}

const handlers = {};

handlers[FETCH_INITIAL_DATA] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

handlers[FETCH_INITIAL_DATA_ERROR] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[CREATE_REQUEST] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[CREATE_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.concat(action.payload),
  isLoading: false,
  errors: undefined,
});

handlers[CREATE_FAILURE] = (state, action) => ({
  ...state,
  isLoading: true,
  errors: 'An error occured, please try again',
});

handlers[DELETE_REQUEST] = (state, action) => ({
  ...state,
  pendingDestroy: action.meta.id,
});

handlers[DELETE_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.filter(meetup => {
    return meetup.id !== action.meta.id
  }),
  pendingDestroy: null,
});

handlers[DELETE_FAILURE] = (state, action) => ({
  ...state,
  pendingDestroy: null,
});

export default createReducer(initialState, handlers);
