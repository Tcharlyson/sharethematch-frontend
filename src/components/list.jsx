import React, { Component } from 'react';
import PropTypes from 'prop-types';

const makeList = (Item) => class List extends Component {

  static propTypes = {
    meetups: PropTypes.array,
    users: PropTypes.array,
  }

  render() {

    const {
      meetups,
      users,
      ...props
    } = this.props;

    const collection = meetups || users

    return (
      <div className="list col-lg-6 col-lg-offset-3">
        {collection.map(item => <Item key={item.id} {...item} {...props} />)}
      </div>
    );
  }
}

export default makeList;
