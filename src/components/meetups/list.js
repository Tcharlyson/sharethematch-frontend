import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MeetupItem from './item';
import makeList from './../list';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MeetupList = makeList(MeetupItem);

export default class Meetups extends Component {

  renderList = () => {
    const { isLoading, ...props } = this.props;
    return (
      isLoading ? (
        <div className="col-lg-offset-2">Loading data...</div>
      ) : (
        <MeetupList {...props} />
      )
    )
  }

  // @TODO: Replace col classes by Col components from react-bootstrap

  render() {
    return (
      <div className="meetup-list">
        <Button className="create-meetup col-lg-offset-2">
          <Link to="/meetups/new">Create meetup</Link>
        </Button>
        {this.renderList()}
      </div>
    )
  }
}
