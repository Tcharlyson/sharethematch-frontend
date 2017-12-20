import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import auth from './reducers/auth';
import meetups from './reducers/meetups'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  auth,
  meetups,
}), composeEnhancers(applyMiddleware(apiMiddleware)));//, applyMiddleware(apiMiddleware));

export default store;

export const isAuthenticated = (state) => {
  auth.isAuthenticated(state.auth)
}

// export const accessToken =
//   state => auth.accessToken(state.auth)

// export const authErrors =
//   state => auth.errors(state.auth)

// export const isAccessTokenExpired =
//   state => auth.isAccessTokenExpired(state.auth)

// export const refreshToken =
//   state => auth.refreshToken(state.auth)

// export const isRefreshTokenExpired =
//   state => auth.isRefreshTokenExpired(state.auth)
