import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="list col-lg-6 col-lg-offset-3">
        {meetups.map(meetup => <Item key={meetup.id} {...meetup} {...props} />)}
      </div>
    );
  }
}

export default makeList;
