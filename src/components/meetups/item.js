import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

class MeetupItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.number.isRequired,
    places_available: PropTypes.number.isRequired,
    adress: PropTypes.number.isRequired,
  }

  handleApplyClick = (e) => {
    const { getCurrentUserId, id } = this.props;
    this.props.apply(getCurrentUserId, id);
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

    const { pendingDestroy, usersList } = this.props;
    const username = usersList.filter(item => item.id === user).map(item => item.username);

    return (
      pendingDestroy === id ? (
        <div className="item pending-destroy">
          <div className="item-content">
            <div>Pending destroy...</div>
          </div>
        </div>
      ) : (
        <div className="item">
          <div className="item-content">
            <div className="item-name">{title}</div>
              <div className="item-details">Host name : {username}</div>
          </div>
          <div className="item-highlight">Places available : {places_available}</div>

          <div className="item-actions">
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
