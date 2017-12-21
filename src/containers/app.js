import App from './../components/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import isAuthenticated from './../store/selectors/is-authenticated';
import userId from './../store/selectors/get-current-user-id';
import currentUser from './../store/selectors/get-user';
import { logout } from './../actions/auth';
import { getUser } from './../actions/users';


const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    userId: userId(state),
    currentUser: currentUser(state),
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout,
  getUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
