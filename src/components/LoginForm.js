import React, { Component } from 'react'
import C from '../constants';
import {connect} from 'react-redux';
import {Card,Form,Button,Alert} from 'react-bootstrap'
import {postOne} from '../fetch'

class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: "",
         password: ""
      }
    }

    handleChange = (e) =>{
        const stateAttr = e.target.id
        this.setState({[stateAttr]: e.target.value})
    }

    handleSignIn = (e) =>{
        e.preventDefault()
        this.props.dispatch({type:C.FETCHING,payload:true})
        this.props.dispatch((dispatch)=>{
            postOne(C.API_LOGIN,this.state,(data)=>{
                console.log('data', data)
                if(data.errors){
                    dispatch({type:C.NEW_ERROR,payload:data.errors})
                }else{
                    dispatch({type:C.LOG_IN,payload:data})
                    dispatch({type:C.CLEAR_ERRORS})
                    
                }
            })
        })
    }
    render() {
        return (
            <Card>
                <Card.Body>
                    {this.props.errors.length>0 ? <Alert variant="danger">{this.props.errors.map(e=><p>{e}</p>)}</Alert> : null}
                    <Card.Title>Sign In</Card.Title>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label >User Email</Form.Label>
                            <Form.Control type="email" onChange={this.handleChange} value={this.state.email}/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" onChange={this.handleChange} value={this.state.password}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSignIn}>
                            Sign In!
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps)(LoginForm)