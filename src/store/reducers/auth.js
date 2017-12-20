import * as auth from './../../actions/auth';

const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  errors: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        accessToken: action.payload.token,
        errors: {}
      }    
    case auth.LOGIN_FAILURE:
      return {
        errors: {'Error':'Auth failed'},
      }
    case auth.LOGIN_REQUEST:
      console.log('Request...');
      break;
  
    default:
      break;
  }
  return state;
}

// export function accessToken(state) {
//   if (state.accessToken) {
//     return state.accessToken
//   }
// }

export function isAuthenticated(state) {
  // return !isRefreshTokenExpired(state)
  console.log('isAuthenticated', state.accessToken !== null)
  return state.accessToken !== null
}

// export function errors(state) {
//   return state.errors
// }

// export function refreshToken(state) {
//   if (state.refreshToken) {
//     return state.refreshToken
//   }
// }

// export function isAccessTokenExpired(state) {
//   if (state.accessToken && state.accessToken.exp) {
//     return 1000 * state.accessToken.exp - (new Date()).getTime() < 5000
//   }
//   return true
// }

// export function isRefreshTokenExpired(state) {
//   if (state.refreshToken && state.refreshToken.exp) {
//     return 1000 * state.refreshToken.exp - (new Date()).getTime() < 5000
//   }
//   return true
// }