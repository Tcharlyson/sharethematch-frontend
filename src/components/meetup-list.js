import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MeetupItem from './meetup-item';
import makeList from './list';

const MeetupList = makeList(MeetupItem);

export default class Meetups extends Component {

  render() {

    const { isLoading, ...props } = this.props;

    return (
      isLoading ? (
        <div>Loading data...</div>
      ) : (
        <MeetupList {...props} />
      )
    )
  }
}
