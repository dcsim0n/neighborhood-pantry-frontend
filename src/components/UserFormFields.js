import React, { Component } from 'react'
import {Form, Card, Button, Col, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'

class UserFormFields extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
         formFirstName: props.user && props.user.firstName,
         formLastName: props.user && props.user.lastName,
         formEmail: props.user && props.user.email,
         formPassword:"",
         formStreet: props.user && props.user.address.street,
         formCity: props.user && props.user.address.city,
         formState: props.user && props.user.address.state,
         formZip:props.user && props.user.address.zip
      }
    }
    handleChange = (event) =>{
      const stateAttr = event.target.id
      this.setState({
        [stateAttr]: event.target.value
      })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log('this.state', this.state)
        this.props.formAction(this.state)
    }

  render() {
    return (
      
      <Card className="user-form">
        <Card.Body >
          {this.props.errors.length > 0 ? <Alert variant='danger'>{this.props.errors.map(e=><p>{e}</p>)}</Alert> : null }
          <Card.Title>{this.props.title}</Card.Title>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label >First Name</Form.Label>
                  <Form.Control onChange={this.handleChange} value={this.state.formFirstName}type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label >Last Name</Form.Label>
                  <Form.Control onChange={this.handleChange} value={this.state.formLastName}type="text" />
                </Form.Group>
              </Form.Row>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control onChange={this.handleChange} value={this.state.formEmail}type="email" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.handleChange} value={this.state.formPassword} type="password" />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

            <Card.Title>Your address</Card.Title>
              <Form.Group controlId="formStreet">
                <Form.Label>Street Address</Form.Label>
                <Form.Control onChange={this.handleChange} value={this.state.formStreet}type="text" />
              </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={this.handleChange} value={this.state.formCity} type="text" />
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={this.handleChange} value={this.state.formState}type="text" />
              </Form.Group>
            </Form.Row>
              <Form.Group controlId="formZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={this.handleChange} value={this.state.formZip}type="text" />
              </Form.Group>
              <Button onClick={this.handleSubmit} variant="primary" type="submit">
                {this.props.buttonLabel}
              </Button>
            </Form>
        </Card.Body>
      </Card>
    )
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
    ...ownProps,
    errors: state.errors
  }
}
export default connect(mapStateToProps)(UserFormFields)