import React, { Component } from 'react'
import C from '../constants';
import {Form, Card, Button, Col, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class SignupForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formFirstName:"",
         formLastName:"",
         formEmail:"",
         formPassword:"",
         formStreet:"",
         formCity:"",
         formState:"",
         formZip:""
      }
    }
    handleChange = (event) =>{
      const stateAttr = event.target.id
      this.setState({
        [stateAttr]: event.target.value
      })
    }

    handleSubmit = (event) =>{
      event.preventDefault()
      console.log('this.state', this.state)

      const data= {
        first_name: this.state.formFirstName,
        last_name: this.state.formLastName,
        email: this.state.formEmail,
        password: this.state.formPassword,
        address_attributes: {
          street: this.state.formStreet,
          city: this.state.formCity,
          state: this.state.formState,
          zip: this.state.formZip
        }
      }
      this.props.dispatch({
        type: C.FETCHING,
        payload: true
      })
      this.props.dispatch((dispatch)=>{
        fetch(`${C.API_ROOT}/users`, {
          method : "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then((resp)=>resp.json())
        .then((data)=>{
          if(data.errors){
            dispatch({type:C.NEW_ERROR,payload:data.errors})
          }else{
            dispatch({type:C.LOG_IN,payload:data})
            dispatch({type:C.CLEAR_ERRORS})
            this.props.history.push("/")
          }
        })
      })

    }
  render() {
    return (
      <Card>
        <Card.Body>
          {this.props.errors.length > 0 ? <Alert variant='danger'>{this.props.errors.map(e=><p>{e}</p>)}</Alert> : null }
          <Card.Title>Create a new account</Card.Title>
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
                Signup!
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
export default withRouter(connect(mapStateToProps)(SignupForm))