import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Navbar from '../components/_layout/Navbar'
import { logout } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'

const NavbarContainer = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className="login-page">
      <Navbar {...props} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
