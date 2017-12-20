import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import Signup from './../../components/auth/signup';
import { signup as actionSignup } from './../../actions/auth';
import isAuthenticated from './../../store/selectors/is-authenticated';

const SignupRestrict = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className="signup-page">
      <Signup {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  signup: (params) => {
    dispatch(actionSignup(params));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupRestrict);
