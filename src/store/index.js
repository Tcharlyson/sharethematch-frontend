import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import auth from './reducers/auth';
import meetups from './reducers/meetups'

const store = createStore(combineReducers({
  auth,
  meetups,
}), applyMiddleware(apiMiddleware));

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
