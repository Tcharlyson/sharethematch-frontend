import App from './../components/app';
import { connect } from "react-redux";
import isAuthenticated from './../store/selectors/auth';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
};

export default connect(mapStateToProps)(App);
