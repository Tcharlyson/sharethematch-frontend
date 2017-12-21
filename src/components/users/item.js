import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

class UserItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
  }

  handleDestroyClick = (e) => {
    const { id } = this.props;
    this.props.destroy(id);
  }

  render() {
    const {
      id,
      username,
      last_name,
      first_name,
    } = this.props;

    const { pendingDestroy } = this.props;

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
            <div className="item-name">{username}</div>
            <div className="item-details">{first_name} {last_name}</div>
          </div>

          <div className="item-actions">
            {/* @TODO: Only show delete btn to admins */}
            <Button onClick={this.handleDestroyClick}>
              <Glyphicon glyph="trash"/>
            </Button>
          </div>
        </div>
      )
    );
  }

}

export default UserItem;
