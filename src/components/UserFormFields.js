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
         formZip:props.user && props.user.address.zip,
         validated: false
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
        const form = event.target
        if(form.checkValidity() === false){
          console.log("form not valid")
          event.stopPropagation()
          this.setState({validated: true})
        }else{
          this.props.formAction(this.state)
        }
        console.log('this.state', this.state)
    }

  render() {
    return (
      
      <Card className="user-form">
        <Card.Body >
          {this.props.errors.length > 0 ? <Alert variant='danger'>{this.props.errors.map(e=><p>{e}</p>)}</Alert> : null }
          <Card.Title>{this.props.title}</Card.Title>
            <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>
              <Form.Row>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label >First Name</Form.Label>
                  <Form.Control 
                    onChange={this.handleChange} 
                    type="text"
                    required />
                  <Form.Control.Feedback type="invalid">Enter your first name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label >Last Name</Form.Label>
                  <Form.Control 
                    onChange={this.handleChange} 
                    type="text" 
                    required />
                  <Form.Control.Feedback type="invalid">Enter your last name</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control 
                    onChange={this.handleChange} 
                    type="email" 
                    required/>
                  <Form.Control.Feedback type="invalid">Enter your email address</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    onChange={this.handleChange} 
                    type="password" 
                    required/>
                  <Form.Control.Feedback type="invalid">Enter a password</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control 
                    type="password" 
                    required/>
                  <Form.Control.Feedback type="invalid">Passwords must match</Form.Control.Feedback>
                </Form.Group>

            <Card.Title>Your address</Card.Title>
              <Form.Group controlId="formStreet">
                <Form.Label>Street Address</Form.Label>
                <Form.Control 
                  onChange={this.handleChange} 
                  type="text" 
                  required/>
                <Form.Control.Feedback type="invalid">Please enter your street address</Form.Control.Feedback>
              </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  onChange={this.handleChange} 
                  type="text" 
                  required/>
                <Form.Control.Feedback type="invalid">Enter your city</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  onChange={this.handleChange} 
                  type="text" 
                  required/>
                <Form.Control.Feedback type="invalid">Enter your two letter state</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
              <Form.Group controlId="formZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                  onChange={this.handleChange} 
                  type="text" 
                  required/>
                <Form.Control.Feedback type="invalid">Enter your city</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
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