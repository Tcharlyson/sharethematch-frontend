import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  apply,
} from './../actions';

import getMeetups from './../store/selectors/get-meetups';
import isLoading from './../store/selectors/is-loading';

import MeetupList from './../components/meetup-list';

const isLoadingMeetups = isLoading('meetups');

const mapStateToProps = (state, props) => {

  console.log('getmeetups', state, getMeetups(state))
  // const categoryId = props.category;

  return {
    meetups: getMeetups(state),
      // .filter(meetup => meetup.category === categoryId),
    isLoading: isLoadingMeetups(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  apply,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MeetupList);
