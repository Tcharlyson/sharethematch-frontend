import Login from './../components/login';
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import React from 'react';
import { loginUser as actionLoginUser } from './../actions/auth';
import isAuthenticated from './../store/selectors/auth';

const LoginRestrict = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to='/' {...props} />
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
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => {
    dispatch(actionLoginUser(username, password));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginRestrict);
