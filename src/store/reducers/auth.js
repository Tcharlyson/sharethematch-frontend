import * as auth from './../../actions/loginUser';

const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  errors: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        accessToken: action.payload.token,
        errors: {}
      }    
      break;
    case auth.LOGIN_FAILURE:
      return {
        errors: {'Error':'Auth failed'},
      }  
      break;
    case auth.LOGIN_REQUEST:
      console.log('Request...');
      break;
  
    default:
      break;
  }
  return state;
}