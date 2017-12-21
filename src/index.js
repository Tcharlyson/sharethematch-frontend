import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import App from './containers/app';
import Login from './containers/auth/login';
import Signup from './containers/auth/signup';
import Meetups from './containers/meetups/list';
import CreateMeetup from './containers/meetups/create';
import Users from './containers/users/list';
import PrivateRoute from './containers/private-route';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* <Redirect from="/" to="/meetups"/> */}
          <PrivateRoute path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/meetups" component={Meetups} />
          <Route exact path="/meetups/new" component={CreateMeetup} />
          <Route exact path="/users" component={Users} />
        </div>
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));
