import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { create as createMeetup } from './../../actions/meetups';
// import { getUser as actionGetUser } from './../actions/users';

// import { createMeetup as actionCreateMeetup} from './../store/selectors/get-meetups';
// import isLoading from './../store/selectors/is-loading';

import CreateMeetup from './../../components/meetups/create';

// const isLoadingMeetups = isLoading('meetups');

const mapStateToProps = (state, props) => {
  return {
    // createMeetup: actionCreateMeetup(state),
    // isLoading: isLoadingMeetups(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createMeetup,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetup);
