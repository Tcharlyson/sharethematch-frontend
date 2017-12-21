import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInitialData, destroy } from './../../actions/meetups';
import { getUsers as fetchUsers } from './../../actions/users';
import { getUsersMeetups as fetchUsersMeetups } from './../../actions/users-meetups';
import { create as apply } from './../../actions/users-meetups';

import getMeetups from './../../store/selectors/get-meetups';
import getUsersMeetups from './../../store/selectors/get-users-meetups';
import getUsers from './../../store/selectors/get-users';
import isLoading from './../../store/selectors/is-loading';
import pendingDestroy from './../../store/selectors/pending-destroy';
import getCurrentUserId from './../../store/selectors/get-current-user-id';


import MeetupList from './../../components/meetups/list';

const isLoadingMeetups = isLoading('meetups');
const pendingDestroyMeetups = pendingDestroy('meetups');

const mapStateToProps = (state, props) => {
  return {
    meetups: getMeetups(state),
    usersList: getUsers(state),
    usersMeetups: getUsersMeetups(state),
    isLoading: isLoadingMeetups(state),
    pendingDestroy: pendingDestroyMeetups(state),
    getCurrentUserId: getCurrentUserId(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
  fetchUsers,
  fetchUsersMeetups,
  apply,
  destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MeetupList);
