import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './store'
import { Route, Switch } from 'react-router'
import Login from './containers/Login';
// import Logout from './containers/Logout';
import Register from './containers/Register';
import PrivateRoute from './containers/PrivateRoute';

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route exact path="/logout/" component={Logout} /> */}
        <Route exact path="/login/" component={Login} />
        <Route exact path="/register/" component={Register} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));