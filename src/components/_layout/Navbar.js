import React from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap';
import { logout } from '../../actions/auth'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { authErrors, isAuthenticated } from '../../reducers'

class Navbar extends React.Component {
  onSubmit = (event) => {
    // event.preventDefault()
    // this.props.onSubmit();
  }

  render() {

    return (
      <div>
        <Nav>
          <NavbarBrand href="/">ShareTheMatch</NavbarBrand>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem className="pull-right">
            <Button onClick={this.onSubmit()}>Logout</Button>
          </NavItem>
        </Nav>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)