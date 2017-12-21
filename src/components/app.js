import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  handleLogout = (e) => {
    this.props.logout();
  }

  makeNavbar = () => {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return (
        <Navbar.Collapse>
        <Navbar.Text pullRight><Button bsSize="xsmall" onClick={this.handleLogout}>Logout</Button></Navbar.Text>
          <Navbar.Text pullRight>Hi user</Navbar.Text>
        </Navbar.Collapse>
      )
    } else {
      return (
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            <Link to={`/signup`}>Sign up</Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <Link to={`/login`}>Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      )
    }
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">ShareTheMatch</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {this.makeNavbar()}
        </Navbar>
      </div>
    );
  }
}

export default App;
