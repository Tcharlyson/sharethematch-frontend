import App from './../components/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import isAuthenticated from './../store/selectors/is-authenticated';
import { logout, } from './../actions/auth';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
