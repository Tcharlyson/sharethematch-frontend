import App from './../components/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import isAuthenticated from './../store/selectors/auth';
import React from 'react';
import { Redirect } from 'react-router'

import {
  fetchInitialData,
} from './../actions/meetups';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
