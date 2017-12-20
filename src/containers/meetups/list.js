import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { apply, destroy } from './../../actions/meetups';
// import { getUser as actionGetUser } from './../actions/users';

import getMeetups from './../../store/selectors/get-meetups';
import isLoading from './../../store/selectors/is-loading';

import MeetupList from './../../components/meetups/list';

const isLoadingMeetups = isLoading('meetups');

const mapStateToProps = (state, props) => {
  return {
    meetups: getMeetups(state),
    // getUser: actionGetUser(state),
    isLoading: isLoadingMeetups(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  apply,
  destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MeetupList);
