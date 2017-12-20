import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MeetupItem from './meetup-item';

const makeList = (Item) => class List extends Component {

  static propTypes = {
    meetups: PropTypes.array.isRequired,
    apply: PropTypes.func.isRequired,
  }

  render() {

    const {
      meetups,
      ...props
    } = this.props;

    return (
      <div className="list">
        {meetups.map(meetup => <Item key={meetup.id} {...meetup} {...props} />)}
      </div>
    );
  }
}

export default makeList;
