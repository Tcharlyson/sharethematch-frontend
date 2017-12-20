import * as auth from './../../actions/auth';

const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  errors: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
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

    // SIGNUP
    case auth.SIGNUP_SUCCESS:
      console.log('User created.')
      break;
    case auth.SIGNUP_FAILURE:
      return {
        errors: {'Error':'Auth failed'},
      }
    case auth.SIGNUP_REQUEST:
      console.log('Request...');
      break;
  
    default:
      break;
  }
  return state;
}