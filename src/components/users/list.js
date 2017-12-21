import React, { Component } from 'react';
import UserItem from './item';
import makeList from './../list';

const UserList = makeList(UserItem);

export default class Users extends Component {

  componentDidMount() {
    this.props.actionGetUsers();
  }

  renderList = () => {
    const { isLoading, ...props } = this.props;
    return (
      isLoading ? (
        <div className="col-lg-offset-3">Loading data...</div>
      ) : (
        <UserList {...props} />
      )
    )
  }

  // @TODO: Replace col classes by Col components from react-bootstrap

  render() {
    return (
      <div className="user-list">
        {this.renderList()}
      </div>
    )
  }
}
