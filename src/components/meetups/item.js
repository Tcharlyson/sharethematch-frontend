import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
// import { getUser } from './../actions/users'

class MeetupItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.number.isRequired,
    places_available: PropTypes.number.isRequired,
    adress: PropTypes.number.isRequired,
  }

  handleApplyClick = (e) => {
    const { id } = this.props;
    this.props.apply(id);
  }

  handleDestroyClick = (e) => {
    const { id } = this.props;
    this.props.destroy(id);
  }

  render() {
    const {
      id,
      title,
      user,
      places_available,
    } = this.props;

    const { pendingDestroy } = this.props;

    return (
      pendingDestroy === id ? (
        <div className="meetup pending-destroy">
          <div className="meetup-content">
            <div>Pending destroy...</div>
          </div>
        </div>
      ) : (
        <div className="meetup">
          <div className="meetup-content">
            <div className="meetup-name">{title}</div>
            <div className="meetup-details">Host id {user}</div>
          </div>
          <div className="meetup-highlight">Places available : {places_available}</div>

          <div className="meetup-actions">
            <Button
              onClick={this.handleApplyClick}
              disabled={!places_available}
            >
              Apply
            </Button>
            {/* @TODO: Only show delete btn to admins and if user is meetup host */}
            <Button onClick={this.handleDestroyClick}>
              <Glyphicon glyph="trash"/>
            </Button>
          </div>
        </div>
      )
    );
  }

}

export default MeetupItem;
