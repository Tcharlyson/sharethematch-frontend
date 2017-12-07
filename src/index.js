import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './containers/app';
import Login from './containers/login';
import Signup from './containers/signup';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));
