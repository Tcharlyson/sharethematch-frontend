import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import auth from './reducers/auth';

const store = createStore(combineReducers({
  auth
}), applyMiddleware(apiMiddleware));

export default store;
