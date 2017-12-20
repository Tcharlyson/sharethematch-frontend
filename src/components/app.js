import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {

    const { isAuthenticated } = this.props;

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">ShareTheMatch</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              {isAuthenticated ? 'Hi user' : <Link to={`/login`}>Login</Link> + '|' + <Link to={`/signup`}>Register</Link>}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
