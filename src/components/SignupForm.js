import React, { Component } from 'react'
import C from '../constants';
import {withRouter} from 'react-router'
import UserFormFields from './UserFormFields'

class SignupForm extends Component {
    
    formAction = (userData) =>{

      const data= {
        first_name: userData.formFirstName,
        last_name: userData.formLastName,
        email: userData.formEmail,
        password: userData.formPassword,
        address_attributes: {
          street: userData.formStreet,
          city: userData.formCity,
          state: userData.formState,
          zip: userData.formZip
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
      <div className="d-flex justify-content-center" >
        <UserFormFields 
          formAction={this.formAction}
          title="Create a New Account"
          buttonLabel="Signup" 
        />
      </div>
    )
  }
}
export default withRouter(SignupForm)