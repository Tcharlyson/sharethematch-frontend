import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Button, Col, Checkbox, ControlLabel } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  // static propTypes = {
  //   loginUser: PropTypes.func.isRequired,
  // }

  handleInputChange = (event) => {
    const target = event.target,
      value = target.type ===
        'checkbox' ? target.checked : target.value,
      name = target.name
    this.setState({
      [name]: value
    });
  }

  handleLoginUserClick = (e) => {
    console.log(this.state);
    this.props.loginUser(this.state.email, this.state.password);
  }

  render() {

    return (
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
              <Button onClick={this.handleLoginUserClick}>
                Sign in
          </Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default Login;