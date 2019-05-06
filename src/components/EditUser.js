import React, { Component } from 'react'
import C from '../constants'
import {connect} from 'react-redux';

import UserFormFields from './UserFormFields'
class EditUser extends Component {
    handleSubmit = (userData)=>{

        const {user} = this.props
        const data= {
            token: user.token,
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
        console.log('userData :', userData);
        this.props.dispatch((dispatch)=>{
            fetch(`${C.API_ROOT}/users/${user.id}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            .then((resp)=>resp.json())
            .then((data)=>{
            if(data.errors){
                dispatch({type:C.NEW_ERROR,payload:data.errors})
            }else{
                dispatch({type:C.USER_INFO,payload:data})
                dispatch({type:C.CLEAR_ERRORS})
            }
            })
        })
    }
    render() {
        return (
        <div className="d-flex justify-content-center">
            <UserFormFields
                user={this.props.user}
                formAction={this.handleSubmit}
                title="Edit Account Settings"
                buttonLabel="Save" />

        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(EditUser)