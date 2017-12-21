import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUsers as actionGetUsers, destroy } from './../../actions/users';

import getUsers from './../../store/selectors/get-users';
import isLoading from './../../store/selectors/is-loading';
import pendingDestroy from './../../store/selectors/pending-destroy';


import UserList from './../../components/users/list';

const isLoadingUsers = isLoading('users');
const pendingDestroyUsers = pendingDestroy('users');

const mapStateToProps = (state, props) => {
  return {
    users: getUsers(state),
    isLoading: isLoadingUsers(state),
    pendingDestroy: pendingDestroyUsers(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  actionGetUsers,
  destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
