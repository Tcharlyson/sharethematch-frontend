import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import auth from './reducers/auth';
import meetups from './reducers/meetups'
import users from './reducers/users'
import { loadState, saveState } from '../utils/local-storage';
import throttle from 'lodash/throttle'
import apiAuthInjector from './middlewares/api-auth-injector';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState()

const middlewares = [
  apiAuthInjector,
  apiMiddleware,
]

const store = createStore(combineReducers({
  auth,
  meetups,
  users,
}), persistedState, composeEnhancers(applyMiddleware(...middlewares)));

store.subscribe(throttle(() => {
  // saveState(store.getState())
  saveState({
    auth: store.getState().auth
  })
}, 1000))

export default store;
