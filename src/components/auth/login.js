import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Button, Col, Checkbox, ControlLabel } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleInputChange = (event) => {
    const target = event.target,
      value = target.type ===
        'checkbox' ? target.checked : target.value,
      name = target.name
    this.setState({
      [name]: value
    });
  }

  handleLoginClick = (e) => {
    this.props.login(this.state.email, this.state.password);
  }

  render() {

    return (
      <Col md={6} mdOffset={3} className="auth-card">
        <h1>Sign in</h1>
        <Col md={8} mdOffset={2}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" name="email" placeholder="Email" onChange={this.handleInputChange} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.handleLoginClick}>
                  Sign in
                </Button>
              </Col>
              <Col smOffset={2} sm={10} className="secondary-link">
                <span>Don't have an account ? <Link to='/signup'>Sign up</Link></span>
              </Col>
              <Col smOffset={2} sm={10} className="errors">
                <span>{this.props.errors}</span>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Col>
    );
  }
}

export default Login;
