import { Login as L} from './../components/login';
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import React from 'react';
import { loginUser as actionLoginUser } from './../actions/loginUser';

const Login = (props) => {
  if (props.accessToken) {
    return <Redirect to='/' />
  }

  return (
    <div className="login-page">
      <L {...props} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => {
      dispatch(actionLoginUser(username, password));
    }
  }
}

export default connect(mapDispatchToProps)(Login);

