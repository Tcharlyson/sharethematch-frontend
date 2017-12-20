import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import isAuthenticated from './../store/selectors/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, location, ...rest }) => (
  <Route {...rest} render={props => {
    if(isAuthenticated) {
      return <Component {...props} />
    } else if(props.location.pathname === '/signup') {
      return (
        <Redirect to={{
          pathname: '/signup',
          state: { from: props.location }
        }} />
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    }
  }} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute);