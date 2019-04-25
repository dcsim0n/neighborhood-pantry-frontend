import React, { Component } from 'react'
import {Form, Col, Row, Card} from 'react-bootstrap'
export default class SignupForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName:"",
         lastName:"",
         email:"",
         street:"",
         city:"",
         state:"",
         zip:""
      }
    }
    
  render() {
    return (
      <div>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column >First Name</Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                        <Form.Label column>Last Name</Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
      </div>
    )
  }
}
