import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import Login from './../../components/auth/login'
import { login as actionLogin } from './../../actions/auth';
import isAuthenticated from './../../store/selectors/is-authenticated';
import { auth as errors } from './../../store/selectors/errors';

const LoginRestrict = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className="login-page">
      <Login {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    errors: errors(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(actionLogin(username, password));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginRestrict);
