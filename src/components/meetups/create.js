import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap';
// import handleInputChange from './../../utils/handle-input-change'

class CreateMeetup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      params: {
        title: '',
        date: '',
        places_available: '',
        user: 1, // @TODO: replace 1 with userId
        adress: '',
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

  handleCreateClick = (e) => {
    this.props.createMeetup(this.state.params);
  }

  render() {

    return (
      <Col md={8} mdOffset={2}>
        <Form horizontal>
          {/* Title */}
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Title
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="title" placeholder="Title" onChange={this.handleInputChange} required />
            </Col>
          </FormGroup>

          {/* Date */}
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Date
            </Col>
            <Col sm={10}>
              <FormControl type="date" name="date" placeholder="Date" onChange={this.handleInputChange} required />
            </Col>
          </FormGroup>

          {/* Places available */}
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Places available
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="places_available" placeholder="Places available" onChange={this.handleInputChange} required />
            </Col>
          </FormGroup>

          {/* Address */}
          {/* @TODO: Replace text input with select */}
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Address
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="adress" placeholder="Address" onChange={this.handleInputChange} required />
            </Col>
          </FormGroup>

          {/* Submit */}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.handleCreateClick}>
                Create
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Col md={8} mdOffset={2} className="errors">
          <span>{this.props.errors}</span>
        </Col>
      </Col>
      
    );
  }
}

export default CreateMeetup;
