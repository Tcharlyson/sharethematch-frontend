import { CALL_API } from 'redux-api-middleware'
import getToken from './../selectors/get-token';

export default store => next => action => {
  const callApi = action[CALL_API]

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    const token = getToken(store.getState())

    // Inject the Authorization header from localStorage.
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization: token ? 'Token ' + token : '',
    })
  }

  return next(action);
}
