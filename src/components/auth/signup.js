import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap';

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      params: {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
      }
    }
  }

  handleInputChange = (event) => {
    const target = event.target,
      value = target.value,
      name = target.name
    this.setState({
      params: {
        ...this.state.params,
        [name]: value
      }
    });
  }

  handleSignupClick = (e) => {
    this.props.signup(this.state.params);
  }

  render() {
    const { redirectLogin } = this.props;

    return ( redirectLogin ? (
      <Redirect to="/login"/>
    ) : (
      <Col md={6} mdOffset={3} className="auth-card">
        <h1>Create account</h1>
        <Col md={8} mdOffset={2}>
          <Form horizontal>
            {/* Username */}
            <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel} sm={2}>
                Username*
              </Col>
              <Col sm={10}>
                <FormControl type="text" name="username" placeholder="Username" onChange={this.handleInputChange} required />
              </Col>
            </FormGroup>

            {/* Password */}
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password*
              </Col>
              <Col sm={10}>
                <FormControl type="password" name="password" placeholder="Password" onChange={this.handleInputChange} required />
              </Col>
            </FormGroup>

            {/* Email  */}
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email*
              </Col>
              <Col sm={10}>
                <FormControl type="email" name="email" placeholder="Email" onChange={this.handleInputChange} required />
              </Col>
            </FormGroup>

            {/* Lastname */}
            <FormGroup controlId="formHorizontalLastname">
              <Col componentClass={ControlLabel} sm={2}>
                Lastname
              </Col>
              <Col sm={10}>
                <FormControl type="text" name="last_name" placeholder="Lastname" onChange={this.handleInputChange} />
              </Col>
            </FormGroup>

            {/* Firstname */}
            <FormGroup controlId="formHorizontalFirstname">
              <Col componentClass={ControlLabel} sm={2}>
                Firstname
              </Col>
              <Col sm={10}>
                <FormControl type="text" name="first_name" placeholder="Firstname" onChange={this.handleInputChange} />
              </Col>
            </FormGroup>

            {/* Submit */}
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.handleSignupClick}>
                  Sign up
                </Button>
              </Col>
              <Col smOffset={2} sm={10} className="secondary-link">
                <span>Already have an account ? <Link to='/login'>Sign in</Link></span>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Col>
    ));
  }
}

export default Signup;
