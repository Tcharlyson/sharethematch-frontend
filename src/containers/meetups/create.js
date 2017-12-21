import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { create as createMeetup } from './../../actions/meetups';
import { meetup as errors } from './../../store/selectors/errors';

// import isLoading from './../store/selectors/is-loading';
import redirectMeetups from './../../store/selectors/redirect-meetups';

import CreateMeetup from './../../components/meetups/create';

// const isLoadingMeetups = isLoading('meetups');

const mapStateToProps = (state, props) => {
  return {
    errors: errors(state),
    // isLoading: isLoadingMeetups(state),
    redirectMeetups: redirectMeetups(state)
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createMeetup,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetup);
