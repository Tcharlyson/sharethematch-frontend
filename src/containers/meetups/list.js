import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInitialData, apply, destroy } from './../../actions/meetups';
// import { getUser as actionGetUser } from './../actions/users';

import getMeetups from './../../store/selectors/get-meetups';
import isLoading from './../../store/selectors/is-loading';
import pendingDestroy from './../../store/selectors/pending-destroy';


import MeetupList from './../../components/meetups/list';

const isLoadingMeetups = isLoading('meetups');
const pendingDestroyMeetups = pendingDestroy('meetups');

const mapStateToProps = (state, props) => {
  return {
    meetups: getMeetups(state),
    // getUser: actionGetUser(state),
    isLoading: isLoadingMeetups(state),
    pendingDestroy: pendingDestroyMeetups(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
  apply,
  destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MeetupList);
