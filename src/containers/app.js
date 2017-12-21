import App from './../components/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import isAuthenticated from './../store/selectors/is-authenticated';

import { fetchInitialData, } from './../actions/meetups';
import { logout, } from './../actions/auth';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
